function toggleAccordion(header) {  
    const content = header.nextElementSibling; // 获取对应的内容区域  

    if (content.style.display === "block") {  
        content.style.display = "none"; // 隐藏内容  
    } else {  
        content.style.display = "block"; // 显示内容  
    }  
}