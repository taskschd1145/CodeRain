document.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        isCursorVisible = !isCursorVisible;
        document.body.style.cursor = isCursorVisible ? 'default' : 'none';
    }
    // 按 'e' 键切换字符类型
    if (event.key === 'e') {
        letters = letters === '01' ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' : '01';
    }
    // 按 'Escape' 键退出
    if (event.key === 'Escape') {
        window.close();
        // 如果window.close()不起作用（某些浏览器可能会阻止），添加后备方案
        if (window.location.href.includes('file://')) {
            alert('请手动关闭窗口');
        } else {
            window.location.href = 'about:blank';
        }
    }
}); 