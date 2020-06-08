//get to the aboutpage
module.exports = {
  getPage(req, res){
      return res.status(200).render('about', { title: 'About'});
  }
}