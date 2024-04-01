import React, { useEffect } from 'react';

const OnfidoComponent = ({ sdkToken, workflowRunId }) => {
    useEffect(() => {
        // Function to check if the Onfido SDK script is already loaded
        const isOnfidoScriptLoaded = () => !!document.querySelector('script[src*="onfido.min.js"]');

        // Function to load the Onfido SDK script
        const loadOnfidoSDK = () => {
            if (isOnfidoScriptLoaded()) {
                console.log('Onfido SDK script already loaded.');
                initializeOnfido();
                return;
            }

            console.log('Loading Onfido SDK script...');
            const script = document.createElement('script');
            script.src = 'https://assets.onfido.com/web-sdk-releases/6.14.0/onfido.min.js'; // Use the latest version available
            script.async = true;
            script.onload = () => {
                console.log('Onfido SDK script loaded.');
                initializeOnfido();
            };
            document.body.appendChild(script);
        };

        // Function to initialize the Onfido SDK
        const initializeOnfido = () => {
            console.log('Initializing Onfido...');
            // Ensure the container element is present in the DOM
            setTimeout(() => {
                if (Onfido && document.getElementById('onfido-mount')) {

                    Onfido.init({
                        token: sdkToken,
                        containerId: "onfido-mount",
                        //containerEl: <div id="root" />, an ALTERNATIVE to `containerId`
                        onComplete: function (data) {
                            console.log("everything is complete");
                        },
                        workflowRunId: workflowRunId,
                    }); Onfido.init({
                        token: sdkToken,
                        containerId: "onfido-mount",
                        //containerEl: <div id="root" />, an ALTERNATIVE to `containerId`
                        onComplete: function (data) {
                            console.log("everything is complete");
                        },
                        workflowRunId: workflowRunId,
                    });
                } else {
                    console.error('Failed to initialize Onfido: SDK not loaded or container not found.');
                }
            }, 0); // Delay initialization to ensure the container is available in the DOM
        };

        loadOnfidoSDK();





        return () => {
            // Optionally, remove the Onfido SDK script when the component unmounts
            const onfidoScript = document.querySelector('script[src*="onfido.min.js"]');
            if (onfidoScript) {
                console.log('Removing Onfido SDK script.');
                document.body.removeChild(onfidoScript);
            }
        };
    }, [sdkToken, workflowRunId]);

    return <div id="onfido-mount" />;
};

export default OnfidoComponent;
