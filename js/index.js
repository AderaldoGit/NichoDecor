const number = "13996600667";

function createMessage() {
  let msg = `Olá! 👋
Vim através do site da NichoDecor e gostaria de solicitar um orçamento para um projeto 😊
`;

  let link = "https://wa.me/" + number + "?text=" + encodeURIComponent(msg);
  window.open(link, "_blank");
}

function localiza() {
  const local =
    "https://www.google.com/maps/place/Peru%C3%ADbe,+SP/data=!4m2!3m1!1s0x94d0260fdd8be325:0x3d167a98073d2ec7?sa=X&ved=1t:242&ictx=111";

  window.open(local, "_blank");
}
