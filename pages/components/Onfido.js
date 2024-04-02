import { useEffect } from 'react';
import '../../node_modules/onfido-sdk-ui/dist/style.css'; // Import Onfido SDK styles

const Onfido = () => {
  useEffect(() => {
    const { init } = require('../../node_modules/onfido-sdk-ui');

    const onfido = init({
      token: process.env.NEXT_PUBLIC_ONFIDO_SDK_TOKEN,
      containerId: 'onfido-mount',
      onComplete: function (data) {
        console.log('Verification complete: ', data);
        // Handle completion logic here, such as sending results to your backend
      },
      // Add other necessary configuration options here
    });

    return () => onfido.tearDown(); // This will clean up the SDK when the component is unmounted
  }, []);

  return <div id="onfido-mount" />;
};

export default Onfido;
