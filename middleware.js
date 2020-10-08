/** In short, this middleware range is necessary when developing using
 * json-server in order to paginate the data (0-20/20)
 */

module.exports = (request, response, next) => {
  response.header("Content-Range", "tasks 0-20/20");
  next();
};
