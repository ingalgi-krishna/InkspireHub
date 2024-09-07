import { Auth0Provider } from '@auth0/auth0-react';
// import { createRoot } from 'react-dom/client';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = 'dev-bilqjdv3oi0m7llx.us.auth0.com';
  const clientId = 'ViwHslwlmBbk3GMGdS1sDpV0HBboaQ9n';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
