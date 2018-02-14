import { AppRegistry } from 'react-native';
import App from '../App';

AppRegistry.registerComponent('rn_device_info_web', () => App);

if (window.document) {
    AppRegistry.runApplication("rn_device_info_web", {
        initialProps: {},
        rootTag: document.getElementById("react-root")
    });
}
