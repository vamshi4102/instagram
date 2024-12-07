const usedImages = {
  homeLogo: require('./instagram-logo.png'),
  mainLogo: {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png',
  },
  LikeIcon: require('./Like.png'),
  ShareIcon: require('./Share.png'),
  Home: require('./Home.png'),
  HomeActive: require('./Home-active.png'),
  Search: require('./Search.png'),
  SearchActive: require('./Search-active.png'),
  Reel: require('./Reels.png'),
  ReelActive: require('./Reels-active.png'),
  Profile: require('./Profile.png'),
  ProfileActive: require('./Profile-active.png'),
  Create: require('./Create.png'),
  downIcon: require('./Chevron-Down.png'),
  thredIcon: require('./Threads.png'),
  menuIcon:require('./Menu.png'),
  CreateActive: require('./Create-active.png'),
  userImage: {
    uri: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2152',
  },
  Options: require('./Options.png'),
  PostImage1: require('./post-1.png'),
  LikeActiveIcon: require('./Like-active.png'),
  CommentIcon: require('./Comment.png'),
  SaveIcon: require('./Save.png'),
  SaveActiveIcon: require('./Save-active.png'),
  facebookLogo: require('./facebook_logo.png'),
  addStory: require('./add-story.png'),
  linkIcon: require('./Link.png'),
  gridIcon: require('./Grid.png'),
  premiumIcon: require('./Exclusive.png'),
  reelsGrayIcon: require('./Reels-gray.png'),
  userMentionsIcon: require('./Tag.png'),
  cameraImage: require('./Camera.png'),
  postLikedUsers: [
    {
      id: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-SYs7TwaEVuCWS-MPjQTeFwIC_C8IJPznnowFYwh-twB-ADdpXk_SN5YGDjvWxBXihQs&usqp=CAU',
    },
    {
      id: 2,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9AInPad7rX_i79xRsSd0BRQDiHyGY3peGxeyrJqyPEG_1vDb1SM6hxHCUZWEyxjeK3V8&usqp=CAU',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
    },
  ],
  videoUrl:"https://media.fastdl.app/get?__sig=2ikIifJTOlDGidHAfrgqdQ&__expires=1733495484&uri=https%3A%2F%2Fscontent-waw2-2.cdninstagram.com%2Fo1%2Fv%2Ft16%2Ff1%2Fm82%2F014F1B190D4627085F06E9B2A0F49C8D_video_dashinit.mp4%3Fstp%3Ddst-mp4%26efg%3DeyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0%26_nc_cat%3D107%26vs%3D935396481409647_1330520486%26_nc_vs%3DHBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8wMTRGMUIxOTBENDYyNzA4NUYwNkU5QjJBMEY0OUM4RF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dJRUJMeG9veXZYTjFtMEJBS3VraFVHNVFzbzRicV9FQUFBRhUCAsgBACgAGAAbABUAACb48Pb74ZaDQRUCKAJDMywXQDDMzMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%253D%253D%26_nc_rid%3D8be75c9bbd%26ccb%3D9-4%26oh%3D00_AYBGf19OMxpbnO9Au_a0UivwKqeYuuc2FDFztOVDInjS7w%26oe%3D6754FE8F%26_nc_sid%3Dd885a2%26dl%3D1&filename=%F0%9D%90%81%F0%9D%90%AB%F0%9D%90%A8%20%F0%9D%90%A7%F0%9D%90%9E%F0%9D%90%9E%20%F0%9D%90%A6%F0%9D%90%9E%F0%9D%90%9E%F0%9D%90%9D%F0%9D%90%A1%F0%9D%90%9A%20%F0%9D%90%A9%F0%9D%90%AB%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%9A%F0%9D%90%AD%F0%9D%90%A1%F0%9D%90%A8%20%F0%9D%90%9C%F0%9D%90%A1%F0%9D%90%9E%F0%9D%90%A9%F0%9D%90%AD%F0%9D%90%A1%F0%9D%90%AE%F0%9D%90%A7%F0%9D%90%9A%20%F0%9D%90%8E%F0%9D%90%AC%F0%9D%90%AD%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%AF%F0%9D%90%9A%20%F0%9D%90%91%F0%9D%90%9A%F0%9D%90%AF%F0%9D%90%9A%20%F0%9D%90%9D%F0%9D%90%9E%F0%9D%90%9C%F0%9D%90%A2%F0%9D%90%9D%F0%9D%90%9E%20%F0%9D%90%9C%F0%9D%90%A1%F0%9D%90%9E%F0%9D%90%AC%F0%9D%90%A4%F0%9D%90%A8%20%20%20%F0%9D%90%82%F0%9D%90%A8%F0%9D%90%A6%F0%9D%90%A6%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD%F0%9D%90%AC%20%F0%9D%90%A5%F0%9D%90%A8%20%F0%9D%90%A6%F0%9D%90%9A%F0%9D%90%AD%F0%9D%90%A5%F0%9D%90%9A%F0%9D%90%9D%F0%9D%90%AE%F0%9D%90%9D%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%A6%20%F0%9D%90%9D%F0%9D%90%A1%F0%9D%90%9A%20%F0%9D%90%9E%F0%9D%90%A6%20%F0%9D%90%9A%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%9A%20%F0%9D%90%AE%F0%9D%90%A7%F0%9D%90%AD%F0%9D%90%9E...%23reactnative%20%23coding%20%23engineering%20%23google%20%23skills%20%23btechkastalu.mp4&ua=-&referer=https%3A%2F%2Fwww.instagram.com%2F"
};
export default usedImages;
