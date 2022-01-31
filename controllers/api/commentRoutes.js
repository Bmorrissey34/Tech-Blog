const router = require('express').Router();
const {Comment, Post} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });



    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const comments = await Post.findByPk(req.params.id,  {
      include: [
        {
          model: Comment,
          attributes: ['comment','user_id','date_created'],
        },
      ]
      });
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
