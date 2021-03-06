const router = require("express").Router();
const commentController = require("../controller/CommentController");
const { body } = require("express-validator");

router.post(
  "/create-comment",
  [
    body("comment").trim().notEmpty().withMessage("comment is required."),
    body("post").trim().notEmpty().withMessage("post is required."),
    body("creator").trim().notEmpty().withMessage("creator is required."),
  ],
  commentController.createComment
);

router.post(
  "/like-comment",
  [body("id").trim().notEmpty().withMessage("id is required")],
  commentController.likeComment
);

router.post(
  "/unlike-comment",
  [body("id").trim().notEmpty().withMessage("id is required")],
  commentController.unlikeComment
);

router.delete(
  "delete-comment",
  [
    body("id")
      .trim()
      .notEmpty()
      .withMessage("id is required to delete comment."),
  ],
  commentController.deleteComment
);

module.exports = router;
