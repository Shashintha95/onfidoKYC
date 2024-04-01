// pages/verify.js

import React from 'react';
import OnfidoComponent from './components/Onfido';

const VerifyPage = () => {
  // Your SDK token and Workflow Run ID should be securely fetched or passed from your server
  const sdkToken = 'api_sandbox.XFtEfcdGfqE.tH_ITWySThlrQZHkXQZIAgR_0RS6Y94O';
  const workflowRunId = '7475679a-0a94-478c-85c8-935f71c1c803';

  return (
    <div>
      <h1>Identity Verification</h1>
      <OnfidoComponent sdkToken={sdkToken} workflowRunId={workflowRunId} />
    </div>
  );
};

export default VerifyPage;
