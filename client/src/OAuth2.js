const env = process.env.REACT_APP_ENV;
let url = 'http://localhost:5000';


if (env === 'production') {
  console.log("prod env girer")
  url = 'https://learnupwords.herokuapp.com';
}

export default{
  url,
  authorizationPath: '/auth',
};
