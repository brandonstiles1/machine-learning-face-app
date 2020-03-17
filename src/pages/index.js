import React, { Component } from 'react';
import * as faceapi from 'face-api.js';
import Dropzone from 'react-dropzone';

import Explainer from '../components/Explainer';
import Upload from '../components/Upload';
import ResultArea from '../components/ResultArea';
import LoadingContainer from '../components/LoadingContainer';
import AnalyzingImageText from '../components/AnalyzingImageText';

import '../assets/App.css';

const MODEL_URL = './face_models';

class App extends Component {
  state = {
    loading: true,
    isBrandon: false,
    isMichael: false,
    file: null,
    analyzingImage: false,
  }

  async componentDidMount() {
    await Promise.all([
      await faceapi.loadSsdMobilenetv1Model(MODEL_URL),
      await faceapi.loadFaceLandmarkModel(MODEL_URL),
      await faceapi.loadFaceRecognitionModel(MODEL_URL),
    ]);

    this.setState({
      loading: false,
    });
  }

  async checkFace(file) {
    if (!file) {
      return;
    }

    const brandon = await faceapi.fetchImage("./brandon.png");
    const michael = await faceapi.fetchImage("./michael.png");
    const upload = await faceapi.fetchImage(file);

    const brandonDescriptor = await faceapi.allFacesSsdMobilenetv1(brandon);
    const michaelDescriptor = await faceapi.allFacesSsdMobilenetv1(michael);
    const uploadedDescriptor = await faceapi.allFacesSsdMobilenetv1(upload);

    const brandonDistance = faceapi.euclideanDistance(
      brandonDescriptor[0].descriptor,
      uploadedDescriptor[0].descriptor,
    );

    const michaelDistance = faceapi.euclideanDistance(
      michaelDescriptor[0].descriptor,
      uploadedDescriptor[0].descriptor,
    );

    this.setState({
      loading: false,
      isBrandon: brandonDistance < 0.6,
      isMichael: michaelDistance < 0.6,
      file: file,
      analyzingImage: false,
    });
  }

  render() {
    return (
      <div className='appContainer'>
        <Explainer />
        {this.state.file &&
          <ResultArea
            isBrandon={this.state.isBrandon}
            isMichael={this.state.isMichael}
            file={this.state.file}
          />
        }
        {this.state.loading ?
          <LoadingContainer />
          :
          <>
            <Dropzone
              accept='image/jpeg, image/png'
              className='dropzone'
              onDrop={accepted => {
                const file = accepted[0];
                const reader = new FileReader();

                this.setState({ analyzingImage: true });

                reader.onload = () => {
                  const fileAsDataURL = reader.result;
                  this.checkFace(fileAsDataURL);
                };

                reader.readAsDataURL(file);
              }}
            >
              <Upload />
              <button> Choose Image </button>
            </Dropzone>

            {this.state.analyzingImage ? <AnalyzingImageText /> : ''}
          </>
        }
      </div>
    );
  }

}

export default App;