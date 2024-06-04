'use client'

import { Component } from 'react'
import Tesseract from 'tesseract.js'

interface CameraFeedPropsInterface {
  sendFile: any
}

interface CameraFeedStateInteraface {
  availableCamerasDevices: CameraDeviceInputInfoInterface[]
  selectCamerasDeviceById: string
  extractedText: string
}

interface CameraDeviceInputInfoInterface {
  deviceId: string
  groupId: string
  kind: string
  label: string
}

export class CameraFeed extends Component<
  CameraFeedPropsInterface,
  CameraFeedStateInteraface
> {
  videoPlayer: any
  canvas: any

  constructor(props: CameraFeedPropsInterface) {
    super(props)
    this.state = {
      availableCamerasDevices: [],
      selectCamerasDeviceById: '',
      extractedText: ''
    }
  }

  async componentDidMount() {
    const cameras = await this.getListOfCameras()

    this.setState({
      availableCamerasDevices: cameras
    })

    this.initializeCamera(cameras)
  }

  initializeCamera(devices: CameraDeviceInputInfoInterface[]) {
    const firstDeviceWeFound = devices.find(device => {
      return device
    }) as CameraDeviceInputInfoInterface

    this.setDevice(firstDeviceWeFound)
  }

  async getListOfCameras() {
    if (!navigator.mediaDevices?.enumerateDevices) {
      console.log('enumerateDevices() not supported.')
    } else {
      let devices

      try {
        devices = await navigator.mediaDevices.enumerateDevices()

        const camerasWithPermission = devices
          .filter(device => device.kind === 'videoinput')
          .every(device => device.label === '')

        if (camerasWithPermission) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: { ideal: 'environment' }
            },
            audio: false
          })

          devices = await navigator.mediaDevices.enumerateDevices()

          stream.getTracks().forEach(track => track.stop())
        }

        const availableCameras = devices.filter(
          device => device.kind === 'videoinput'
        )

        return availableCameras
      } catch (e) {
        console.log('error trying to fetch media devices:', e)
      }
    }
    return []
  }

  async setDevice(device: CameraDeviceInputInfoInterface) {
    this.setState({
      selectCamerasDeviceById: device.deviceId
    })
    const { deviceId } = device

    const stream = await navigator.mediaDevices
      .getUserMedia({ audio: false, video: { deviceId } })
      .catch(e =>
        console.log(
          'getUserMedia not supported',
          navigator.mediaDevices,
          'with following error:',
          e
        )
      )

    if ('srcObject' in this.videoPlayer) {
      this.videoPlayer.srcObject = stream
    } else {
      console.log('[no supported] couldnt find srcObject on video player')
    }

    setTimeout(() => {
      this.videoPlayer.play()
    }, 10)
  }

  capturePhoto = () => {
    const { sendFile } = this.props
    const context = this.canvas.getContext('2d')
    context.drawImage(this.videoPlayer, 0, 0, 680, 360)
    const dataBase64 = this.canvas.toDataURL('image/jpeg')
    sendFile(dataBase64)

    // Use Tesseract.js to extract text
    Tesseract.recognize(this.canvas, 'eng', {
      logger: m => console.log(m)
    }).then(({ data: { text } }) => {
      console.log(text)
      this.setState({ extractedText: text })
    })
  }

  pickCameraDevice = (deviceId: string) => {
    const device: CameraDeviceInputInfoInterface =
      this.state.availableCamerasDevices.find(
        (device: CameraDeviceInputInfoInterface) => device.deviceId === deviceId
      ) as CameraDeviceInputInfoInterface
    this.setDevice(device)
  }

  render() {
    return (
      <div>
        <div className="text-center p-5">
          {
            <select
              onChange={e => this.pickCameraDevice(e.currentTarget.value)}
              value={this.state.selectCamerasDeviceById}
            >
              <option disabled>Select a Camera</option>
              {this.state.availableCamerasDevices.map(
                (camera: CameraDeviceInputInfoInterface) => {
                  return (
                    <option key={camera.deviceId} value={camera.deviceId}>
                      {camera.label}
                    </option>
                  )
                }
              )}
            </select>
          }
        </div>
        <video
          ref={ref => (this.videoPlayer = ref)}
          playsInline={true}
          width="680"
          height="360"
        />
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={this.capturePhoto}
            className="text-base p-1 font-semibold m-2 cursor-pointer"
          >
            Capture photo
          </button>
        </div>
        <div className="shadow-sm rounded-sm">
          <canvas width="680" height="360" ref={ref => (this.canvas = ref)} />
        </div>
        {this.state.extractedText && (
          <div className="text-center p-5">
            <h2>Extracted Text:</h2>
            <p>{this.state.extractedText}</p>
          </div>
        )}
      </div>
    )
  }
}
