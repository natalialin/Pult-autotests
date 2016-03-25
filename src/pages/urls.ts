let ssl = false;
let domain = '//omni-pult.env-14.testing-02/';

let getUrl = (destination: string): string => {
  return (ssl ? 'https:' : 'http:') + domain;
};

export const urls = {
  GoToUrl: getUrl('/')
};
