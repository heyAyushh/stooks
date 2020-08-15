const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://stooks.vercel.app';
export const immersiveUrl = "https://immersivefunction.azurewebsites.net/api/GetTokenAndSubdomain?code=8uvydxt93ldzOmuaNSW7va6a4AXmRzlXZCwITMqfAzD1DxhG4jcgKA==";