import ReviewModel from '../models/ReviewModel';

const ReviewController = {
  async create(req, res) {
    try {
      const review = await new ReviewModel({
        product: req.body.product,
        author: req.body.author,
        text: req.body.text,
      });

      await review.save();
      await res.send({ data: 'success' });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

export default ReviewController;
