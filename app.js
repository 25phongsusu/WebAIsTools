//----------------------------------IMG------------------------------------
//TODO bỏ link vào
var linkIMG = [
  {
    name: 'PICWISH',
    mieuta: 'loại bỏ background',
    link: 'https://picwish.com/'
  },
  {
    name: 'CLEANUP.PICTURE',
    mieuta: 'Xóa bỏ chi tiết thừa',
    link: 'https://cleanup.pictures'
  },
  {
    name: 'ILOVEIMG',
    mieuta: 'Resize ảnh, giúp full HD',
    link: 'https://www.iloveimg.com'
  },
  {
    name: 'UPSCALE.MEDIA',
    mieuta: 'Resize ảnh, giúp full HD',
    link: 'https://www.upscale.media'
  },
  {
    name: 'COLORMIND',
    mieuta: 'Tạo bảng màu từ ảnh up lên',
    link: 'http://colormind.io/image'
  },
  {
    name: 'SNAPEDIT',
    mieuta: 'Dùng để xóa vật thể.Web sẽ tự động quét các vật thể tách riêng thành từng mục, sau đó bạn có thể chọn vật thể để xóa',
    link: 'https://snapedit.app'
  },
 
];
for (let a of linkIMG) {
  var codeLinkIMG = `<div class="card">
  <h2>${a.name}</h2>
  <p>${a.mieuta}</p>
  <a href="${a.link}">Xem ngay</a>
</div>`;
  document.getElementById('image-section').innerHTML += codeLinkIMG;
};
//-----------------------------End of IMG--------------------------------------


//-----------------------------Audio-------------------------------------------
//ToDO bỏ link vào
var linkAUDIO = [
  {
    name: 'ADOBE ENCHANCE',
    mieuta: 'Lọc âm',
    link: 'https://podcast.adobe.com/enhance'
  },
  {
    name: 'VOCALREMOVER',
    mieuta: 'Tách vocal và nhạc',
    link: 'https://vocalremover.org/'
  },
  {
    name: 'AUDIO ALTER',
    mieuta: 'BassBossted,Revert,8D,...',
    link: 'https://audioalter.com/'
  },
  {
    name: 'MYINSTANTS',
    mieuta: 'Sound effect hay sử dụng',
    link: 'https://www.myinstants.com/en/index/vn/'
  },
  {
    name: 'VOICEMAKER',
    mieuta: 'Văn bản thành giọng đọc truyền cảm',
    link: 'https://voicemaker.fpt.ai/'
  },
  {
    name: 'ADOBE VIDEO FROM ADOBE',
    mieuta: 'Văn bản thành video hoạt hình',
    link: 'https://express.adobe.com/express-apps/animate-from-audio/'
  }
];
for (let a of linkAUDIO) {
  var codeLinkAudio = `<div class="card">
  <h2>${a.name}</h2>
  <p>${a.mieuta}</p>
  <a href="${a.link}">Xem ngay</a>
</div>`;
  document.getElementById('audio-section').innerHTML += codeLinkAudio;
};
//----------------------------------End of Audio--------------------------------------


//-----------------------------------Coding-------------------------------------------
//TODO bỏ link vào
var linkCODING = [
  {
    name: 'UIVERSE',
    mieuta: 'Web mẫu 1 số css đẹp',
    link: 'https://uiverse.io/all'
  },
  {
    name: 'VISUALGO',
    mieuta: 'Hiển thị cách các thuật toán hoạt động',
    link: 'https://visualgo.net/en'
  },
  {
    name: 'CSSPORTAL',
    mieuta: 'Tạo CSS',
    link: 'https://www.cssportal.com/'
  }
];
for (let a of linkCODING) {
  var codeLinkCoding = `<div class="card">
  <h2>${a.name}</h2>
  <p>${a.mieuta}</p>
  <a href="${a.link}">Xem ngay</a>
</div>`;
  document.getElementById('coding-section').innerHTML += codeLinkCoding;
};
//-----------------------------------End of coding -------------------------------------


//-----------------------------------Video----------------------------------------------

//todo bỏ link vào
var linkVIDEO = [
  {
    name: 'CHAT-ANIMATOR',
    mieuta: 'Tạo đoạn chat fake, phù hợp để tạo dựng 1 video gồm các đoạn hội thoại qua tin nhắn',
    link: 'https://chat-animator.com/'
  },
  {
    name: 'OPUS',
    mieuta: 'Thêm phụ đề cho video, giống Short trên Youtube',
    link: 'https://www.opus.pro/'
  }
];
for (let a of linkVIDEO) {
  var codeLinkVideo = `<div class="card">
  <h2>${a.name}</h2>
  <p>${a.mieuta}</p>
  <a href="${a.link}">Xem ngay</a>
</div>`;
  document.getElementById('video-section').innerHTML += codeLinkVideo;
};
//----------------------------------End of Video------------------------------------


//------------------------------------Others------------------------------------------
//Todo bỏ link zô
var linkOthers = [
  {
    name: 'TINYWOW',
    mieuta: 'Chuyển đổi tất cả định dạng',
    link: 'https://tinywow.com/'
  },
  {
    name: 'CONVERTIO',
    mieuta: 'chuyển đổi định dạng',
    link: 'https://convertio.co/vn/'
  },
  {
    name: 'GOFILE',
    mieuta: 'Lưu trữ file ngắn hạn nhanh gọn',
    link: 'https://gofile.io/welcome'
  },
  {
    name: 'THERESANAIFORTHAT',
    mieuta: 'Tìm AI',
    link: 'https://theresanaiforthat.com/'
  },
  {
    name: 'FUTUREPEDIA',
    mieuta: 'Tìm AI2',
    link: 'https://www.futurepedia.io/'
  },

   {
    name: 'NOISLI',
    mieuta: 'Âm thanh tự nhiên để thư giãn và làm việc',
    link: 'https://www.noisli.com/playlists'
  },
  {
    name: 'RAINYMOOD',
    mieuta: 'Âm thanh tự nhiên để thư giãn và làm việc',
    link: 'https://www.noisli.com/playlists'
  }
];
for (let a of linkOthers) {
  var codeLinkOthers = `<div class="card">
    <h2>${a.name}</h2>
    <p>${a.mieuta}</p>
    <a href="${a.link}">Xem ngay</a>
  </div>`;
  document.getElementById('others-section').innerHTML += codeLinkOthers;
};
//-----------------------------End of others-------------------------------------------
//! JavaScript to show/hide content sections
function showSection(section) {
  // hide all content sections
  var sections = document.getElementsByClassName("content-section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }

  // show the selected content section
  var selectedSection = document.getElementById(section + "-section");
  selectedSection.classList.add("active");
};
