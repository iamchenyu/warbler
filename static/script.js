const likeFormHandler = async (e) => {
  e.preventDefault();
  messageId = e.target.dataset.msg;

  await axios.post(`/users/add_like/${messageId}`);

  likeButton = e.target.children[0];

  if (likeButton.classList.contains("btn-primary")) {
    likeButton.classList.remove("btn-primary");
    likeButton.classList.add("btn-secondary");
  } else {
    likeButton.classList.remove("btn-secondary");
    likeButton.classList.add("btn-primary");
  }
};

$(".likes-form").on("submit", likeFormHandler);

const followFormHandler = async (e) => {
  e.preventDefault();

  res = await axios.post(`/users/follow/${e.target.dataset.user}`);

  followButton = e.target.children[0];

  if (followButton.innerText === "Unfollow") {
    followButton.innerText = "Follow";
    followButton.classList.remove("btn-primary");
    followButton.classList.add("btn-outline-primary");
    $(".following-num")[0].innerText = res.data.following;
  } else {
    followButton.innerText = "Unfollow";
    followButton.classList.remove("btn-outline-primary");
    followButton.classList.add("btn-primary");
    $(".following-num")[0].innerText = res.data.following;
  }
};

$(".follow-form").on("submit", followFormHandler);

const messageFormHandler = async (e) => {
  e.preventDefault();
  await axios.post("/messages/new", { message: $("#text").val() });
  location.reload();
};

$("#new-message-form").on("submit", messageFormHandler);
