//get the homepage
module.exports = {
  getPage(req, res){
      return res.status(200).render('index', { title: 'Country', name: 'index' });
  }
}
