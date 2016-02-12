$(function () {
  var ref = new Firebase("https://jbcom-comments.firebaseio.com/");

  var postRef = ref.child(slugify(window.location.pathname));

  $("#comment").submit(function () {
    postRef.push().set({
      name: $("#name").val(),
      message: $("#message").val(),
      md5Email: md5($("#email").val()),
      postedAt: Firebase.ServerValue.TIMESTAMP
    });

    $("input[type=text], textarea").val("");
    return false;
  });

  postRef.on("child_added", function (snapshot) {
    var newComment = snapshot.val();
    $(".comments").prepend([
      '<div class="comment">',
      '<h4>' + newComment.name + '</h4>',
      '<div class="profile-image"><img src="http://www.gravatar.com/avatar/' + newComment.md5Email + '?s=100&d=retro"/></div> ',
      moment(newComment.postedAt).fromNow() + '<p>' + newComment.message  + '</p></div>'
    ].join(''))
  })
});

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, '-')
    .replace(/[^a-zA-Z0-9-_]+/g, '');
}
