const checkLogin = require('./login');

test('Đăng nhập THÀNH CÔNG với đúng tài khoản và mật khẩu', () => {
    expect(checkLogin('admin', '123')).toBe(true);
});

test('Đăng nhập THẤT BẠI khi sai mật khẩu', () => {
    expect(checkLogin('admin', '1234')).toBe(false);
});
