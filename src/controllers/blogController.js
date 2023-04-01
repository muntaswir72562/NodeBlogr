const Blog = require("../model/blog");

const blog_index = (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { blogs: result });
    })
    .catch((err) => {
      res.send(err);
    });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("post", { blog: result });
    })
    .catch((err) => {
      res.render("404");
    });
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports={
    blog_index,
    blog_details,
    blog_create_post,
    blog_delete
}