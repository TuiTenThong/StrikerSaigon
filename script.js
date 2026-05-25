// ================= CHỨC NĂNG SLIDER (XỬ LÝ CHUYỂN ẢNH) =================

// Khai báo chuẩn danh sách đường dẫn ảnh nằm trong thư mục img/ của em
const images = [
    "img/Banner1.png", 
    "img/Banner2.png", 
    "img/Banner3.png"  
];

let currentIndex = 0; 

const sliderImg = document.getElementById("slider-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Xử lý sự kiện bấm nút mũi tên bên phải (Next)
nextBtn.addEventListener("click", function() {
    currentIndex++; 
    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }
    sliderImg.src = images[currentIndex]; 
});

// Xử lý sự kiện bấm nút mũi tên bên trái (Prev)
prevBtn.addEventListener("click", function() {
    currentIndex--; 
    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    }
    sliderImg.src = images[currentIndex]; 
});


// ================= CHỨC NĂNG NÚT CUỘN LÊN ĐẦU TRANG =================

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function() {
    // Hiện nút khi người dùng cuộn chuột xuống quá 300px
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", function(e) {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ================= CHỨC NĂNG SLIDER (CHUYỂN ẢNH BANNER) =================
const images = [
    "img/Banner1.png", 
    "img/Banner2.jpg", 
    "img/Banner3.jpg"  
];

let currentIndex = 0; 
const sliderImg = document.getElementById("slider-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Chỉ chạy Slider nếu tìm thấy thẻ slider-img trên trang (tránh lỗi ở trang news.html)
if (sliderImg && prevBtn && nextBtn) {
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length; 
        sliderImg.src = images[currentIndex]; 
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; 
        sliderImg.src = images[currentIndex]; 
    });
}

// ================= NÚT CUỘN MƯỢT LÊN ĐẦU TRANG =================
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
        scrollTopBtn.style.display = (window.pageYOffset > 300) ? "flex" : "none";
    });

    scrollTopBtn.addEventListener("click", (e) => {
        e.preventDefault(); 
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });
}