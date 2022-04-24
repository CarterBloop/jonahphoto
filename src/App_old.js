import './App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo-container">
          <div className="Logo-text">
            JONAH SAFFRAN PRODUCTIONS
          </div>
        </div>
      </header>
      <body className="App-body">
        <Nav justify variant="tabs" defaultActiveKey="/photo">
          <Nav.Item>
            <Nav.Link href="/photo">Photography</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Film</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="Carousel-container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/beck1.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIBWpiIAoVsLOOksT7rU4FsM5VihtXMA4Cn9gOYQO%2BDgsAiBV5K9P819t58MKDqFSpJyKh0gRV6OfdLr3k5VdA9A%2BuyrkAghPEAAaDDM2ODE3OTMxMTU4OSIMZTBwXm%2FBbWzznqYsKsECAOv7Cd%2Fr07lpQwLrMCK8mUCso%2BLts492NIRyaOXzmaU6lwSrf7wMJUr7g4x1v%2Bgof5V4UFgf0jI1CRZEZwG8pp7UTry6rz5BGffzdF%2FRcdTIsVwkG7YLrkDPCIwh652HFoywO4lLQISqQcMzvZjVyLZkcPe%2FnrUR5qCgSsj4ojbX2ACpf4EDLNBptV24TYGyZvLNAu3NWnfz7B7e6jCOz70cnAzPESvlEsqZ7Fw%2BjwpldHhVfhauUKJiIKZOt5YG%2Bvd%2FiwGkR9uucoR2ZthZ1IzHXU0sxF42Sa6mL5HHkRbHMOGp8EUBlUzLTOE%2F3hR46nJt469HRX7rRixDk03mddAOD1fPMjI2HC33cDlQOFvwOsH52HZZnOiDED1dTbPR%2BHfQX017gTMSRP1O65xZnqXg7cZmffC3QZXKcY%2B059eFMPfTjJMGOrQChMoQx6o%2Bt9dwMvfk2Yfnl4Y8mlRCKOt7FOp55KbGmFMtfQ5GUiAV%2BdZMHpNjrwD45HXdurA2IU4uXowQJ92c6qTiVBNKrCkGYKfYDtBZZhzVCn0A5zmf9vkCxe2JQKV5DXKA4C4RQRDtFeaIrSMGwHZ839gJ5JjLij%2FYk%2FRHA%2FDs59D1i8TgFsQ8EpnYQdioi4Kh4R3yOCqh7755ZuNOm6DWJxvxSrHiMEdTSFXnmTdaZF3sJKLQkmCsZG1osfQsLufUp6ZkO1SGaBY5%2BcCwqRjnYzKLxaa9d1KYHtnpl8Nrm5jkntM3gBgkxE4ZJ%2B7kt6rcb0zi9Ty8qKftAKbsEGyfQK%2F%2FpQmVQtdnYM0w3oJoJUphtdh7FUtcbM%2FoD6GO5RymKy2gZRU%2FtX%2FgtOOLcjYk5E0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220422T230416Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVLOJSOPS6I6HLNY2%2F20220422%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=5edadff0f1ef21da78ffe4f7ee1a7540cb535c602e99cfe46814aa10bea9d484"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/beck1.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIBWpiIAoVsLOOksT7rU4FsM5VihtXMA4Cn9gOYQO%2BDgsAiBV5K9P819t58MKDqFSpJyKh0gRV6OfdLr3k5VdA9A%2BuyrkAghPEAAaDDM2ODE3OTMxMTU4OSIMZTBwXm%2FBbWzznqYsKsECAOv7Cd%2Fr07lpQwLrMCK8mUCso%2BLts492NIRyaOXzmaU6lwSrf7wMJUr7g4x1v%2Bgof5V4UFgf0jI1CRZEZwG8pp7UTry6rz5BGffzdF%2FRcdTIsVwkG7YLrkDPCIwh652HFoywO4lLQISqQcMzvZjVyLZkcPe%2FnrUR5qCgSsj4ojbX2ACpf4EDLNBptV24TYGyZvLNAu3NWnfz7B7e6jCOz70cnAzPESvlEsqZ7Fw%2BjwpldHhVfhauUKJiIKZOt5YG%2Bvd%2FiwGkR9uucoR2ZthZ1IzHXU0sxF42Sa6mL5HHkRbHMOGp8EUBlUzLTOE%2F3hR46nJt469HRX7rRixDk03mddAOD1fPMjI2HC33cDlQOFvwOsH52HZZnOiDED1dTbPR%2BHfQX017gTMSRP1O65xZnqXg7cZmffC3QZXKcY%2B059eFMPfTjJMGOrQChMoQx6o%2Bt9dwMvfk2Yfnl4Y8mlRCKOt7FOp55KbGmFMtfQ5GUiAV%2BdZMHpNjrwD45HXdurA2IU4uXowQJ92c6qTiVBNKrCkGYKfYDtBZZhzVCn0A5zmf9vkCxe2JQKV5DXKA4C4RQRDtFeaIrSMGwHZ839gJ5JjLij%2FYk%2FRHA%2FDs59D1i8TgFsQ8EpnYQdioi4Kh4R3yOCqh7755ZuNOm6DWJxvxSrHiMEdTSFXnmTdaZF3sJKLQkmCsZG1osfQsLufUp6ZkO1SGaBY5%2BcCwqRjnYzKLxaa9d1KYHtnpl8Nrm5jkntM3gBgkxE4ZJ%2B7kt6rcb0zi9Ty8qKftAKbsEGyfQK%2F%2FpQmVQtdnYM0w3oJoJUphtdh7FUtcbM%2FoD6GO5RymKy2gZRU%2FtX%2FgtOOLcjYk5E0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220422T230416Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVLOJSOPS6I6HLNY2%2F20220422%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=5edadff0f1ef21da78ffe4f7ee1a7540cb535c602e99cfe46814aa10bea9d484"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/beck1.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIBWpiIAoVsLOOksT7rU4FsM5VihtXMA4Cn9gOYQO%2BDgsAiBV5K9P819t58MKDqFSpJyKh0gRV6OfdLr3k5VdA9A%2BuyrkAghPEAAaDDM2ODE3OTMxMTU4OSIMZTBwXm%2FBbWzznqYsKsECAOv7Cd%2Fr07lpQwLrMCK8mUCso%2BLts492NIRyaOXzmaU6lwSrf7wMJUr7g4x1v%2Bgof5V4UFgf0jI1CRZEZwG8pp7UTry6rz5BGffzdF%2FRcdTIsVwkG7YLrkDPCIwh652HFoywO4lLQISqQcMzvZjVyLZkcPe%2FnrUR5qCgSsj4ojbX2ACpf4EDLNBptV24TYGyZvLNAu3NWnfz7B7e6jCOz70cnAzPESvlEsqZ7Fw%2BjwpldHhVfhauUKJiIKZOt5YG%2Bvd%2FiwGkR9uucoR2ZthZ1IzHXU0sxF42Sa6mL5HHkRbHMOGp8EUBlUzLTOE%2F3hR46nJt469HRX7rRixDk03mddAOD1fPMjI2HC33cDlQOFvwOsH52HZZnOiDED1dTbPR%2BHfQX017gTMSRP1O65xZnqXg7cZmffC3QZXKcY%2B059eFMPfTjJMGOrQChMoQx6o%2Bt9dwMvfk2Yfnl4Y8mlRCKOt7FOp55KbGmFMtfQ5GUiAV%2BdZMHpNjrwD45HXdurA2IU4uXowQJ92c6qTiVBNKrCkGYKfYDtBZZhzVCn0A5zmf9vkCxe2JQKV5DXKA4C4RQRDtFeaIrSMGwHZ839gJ5JjLij%2FYk%2FRHA%2FDs59D1i8TgFsQ8EpnYQdioi4Kh4R3yOCqh7755ZuNOm6DWJxvxSrHiMEdTSFXnmTdaZF3sJKLQkmCsZG1osfQsLufUp6ZkO1SGaBY5%2BcCwqRjnYzKLxaa9d1KYHtnpl8Nrm5jkntM3gBgkxE4ZJ%2B7kt6rcb0zi9Ty8qKftAKbsEGyfQK%2F%2FpQmVQtdnYM0w3oJoJUphtdh7FUtcbM%2FoD6GO5RymKy2gZRU%2FtX%2FgtOOLcjYk5E0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220422T230416Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVLOJSOPS6I6HLNY2%2F20220422%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=5edadff0f1ef21da78ffe4f7ee1a7540cb535c602e99cfe46814aa10bea9d484"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </body>
    </div>
  );
}

export default App;
