<template>
<div class="pop">
    <div class="loading square"></div>
</div>
</template>
<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  mounted: function () {
  }
}
</script>
<style lang="less" scoped>
.pop {
  position: relative;
  height: 300px;
  width: 100%;
  background: rgba(0, 0, 0, .8);
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    background: transparent;
    &.square {
<<<<<<< HEAD:src/components/xzqloading.vue
      margin-top: -100px;
      margin-left: -100px;
      width: 200px;
      height: 200px;
      background: url('~images/psb.jpg') center center no-repeat;
      -webkit-transform-origin: 100px 100px;
        transform-origin: 100px 100px;
      z-index: 999;
      &:hover {
        // -webkit-animation: square-load 1.5s infinite ease-in-out;
        // animation: square-load 1.5s infinite  ease-in-out;
        -webkit-animation: square-spin 1s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
        animation: square-spin 1s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
      }
=======
      margin-top: -50px;
      margin-left: -50px;
      width: 100px;
      height: 100px;
      background: url('~images/favorite.jpg') center center no-repeat;
      background-size: contain;
      -webkit-transform-origin: 50px 50px;
      transform-origin: 50px 50px;
      z-index: 999;
      -webkit-animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
      animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
>>>>>>> 6e3582c12524b9d371413d2f111709e4b181dee0:src/components/loading/xzqloading.vue
    }
  }
}
@-webkit-keyframes square-load {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes square-load {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

<<<<<<< HEAD:src/components/xzqloading.vue
// @-webkit-keyframes square-spin {
//     0% {
//         -webkit-transform: perspective(400px) rotateZ(0);
//         transform: perspective(400px) rotateZ(0)
//     }

//     // 25% {
//     //     -webkit-transform: perspective(400px) rotateZ(90deg);
//     //     transform: perspective(400px) rotateZ(90deg)
//     // }

//     // 50% {
//     //     -webkit-transform: perspective(400px) rotateZ(180deg);
//     //     transform: perspective(400px) rotateZ(180deg)
//     // }

//     // 75% {
//     //     -webkit-transform: perspective(400px) rotateZ(270deg);
//     //     transform: perspective(400px) rotateZ(270deg)
//     // }

//     100% {
//         -webkit-transform: perspective(400px) rotateZ(360deg);
//         transform: perspective(400px) rotateZ(360deg)
//     }
// }
=======
@keyframes square-spin {
    0% {
        -webkit-transform: perspective(400px) rotateX(0) rotateY(0);
        transform: perspective(400px) rotateX(0) rotateY(0)
    }

    25% {
        -webkit-transform: perspective(400px) rotateX(180deg) rotateY(0);
        transform: perspective(400px) rotateX(180deg) rotateY(0)
    }

    50% {
        -webkit-transform: perspective(400px) rotateX(180deg) rotateY(180deg);
        transform: perspective(400px) rotateX(180deg) rotateY(180deg)
    }

    75% {
        -webkit-transform: perspective(400px) rotateX(0) rotateY(180deg);
        transform: perspective(400px) rotateX(0) rotateY(180deg)
    }

    100% {
        -webkit-transform: perspective(400px) rotateX(0) rotateY(360deg);
        transform: perspective(400px) rotateX(0) rotateY(360deg)
    }
}
>>>>>>> 6e3582c12524b9d371413d2f111709e4b181dee0:src/components/loading/xzqloading.vue
// @keyframes square-spin {
//     0% {
//         -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
//         -moz-transform: perspective(100px) rotateX(0) rotateY(0);
//         transform: perspective(100px) rotateX(0) rotateY(0)
//     }

//     25% {
//         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
//         -moz-transform: perspective(100px) rotateX(180deg) rotateY(0);
//         transform: perspective(100px) rotateX(180deg) rotateY(0)
//     }

//     50% {
//         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
//         -moz-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
//         transform: perspective(100px) rotateX(180deg) rotateY(180deg)
//     }

//     75% {
//         -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
//         -moz-transform: perspective(100px) rotateX(0) rotateY(180deg);
//         transform: perspective(100px) rotateX(0) rotateY(180deg)
//     }

//     100% {
//         -webkit-transform: perspective(100px) rotateX(0) rotateY(360deg);
//         -moz-transform: perspective(100px) rotateX(0) rotateY(360deg);
//         transform: perspective(100px) rotateX(0) rotateY(360deg)
//     }
// }

</style>
