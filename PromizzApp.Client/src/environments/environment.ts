export const environment = {
  production: false,
  apiUrl: 'https://localhost:44359/api',
  openIdConnectSettings: {
    authority: 'https://localhost:44367/',
    client_id: 'promizzclient',
    redirect_uri: 'https://localhost:4300/signin-cb',
    scope: 'openid profile roles promizzapi',
    response_type: 'id_token token',
    post_logout_redirect_uri: 'https://localhost:4300/',
    automaticSilentRenew: true,
    silent_redirect_uri: 'https://localhost:4300/redirect-silentrenew'
  }
};