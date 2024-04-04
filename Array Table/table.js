const database = {
    books: [
        {
            id: 1,
            title: "Triều đại của một ông hoàng quảng cáo",
            author: "Kenmeth Roman",
            code: "CN.A-001",
            status: "Tủ sách",
        },
        {
            id: 2,
            title: "Khoảng cách",
            author: "Marty Neumeier",
            code: "CN.A-002",
            status: "Tủ sách",
        },
        {
            id: 3,
            title: "Marketing Du kích",
            author: "Jay Levinson",
            code: "CN.A-003",
            status: "Tủ sách",
        },
        {
            id: 4,
            title: "Thương mai điện tử căn bản",
            author: "Trần Thị Thập - Nguyễn Trần Hưng",
            code: "CN.A-004",
            status: "Tủ sách",
        },
        {
            id: 5,
            title: "Quản trị kinh doanh dịch vụ từ góc nhìn marketing",
            author: "Nhiều tác giả",
            code: "CN.A-005",
            status: "Tủ sách",
        },
        {
            id: 6,
            title: "Siêu kinh tế học hài hước",
            author: "Steven D Levitt & Stephen J.Dubner",
            code: "CN.A-006",
            status: "Tủ sách",
        },
        {
            id: 7,
            title: "Lý thuyết đầu tư",
            author: "Nhiều tác giả",
            code: "CN.A-007",
            status: "Tủ sách",
        },
        {
            id: 8,
            title: "Chiến lược marketing truyền thông xã hội",
            author: "Nhiều tác giả",
            code: "CN.A-008",
            status: "Tủ sách",
        },
        {
            id: 9,
            title: "Thật đơn giản phỏng vấn tuyển dụng",
            author: "Ros Jay",
            code: "CN.B-001",
            status: "Tủ sách",
        },
        {
            id: 10,
            title: "Machine platform crownd (Máy móc nền tảng cộng đồng)",
            author: "Andrew Mcaffe, Erik Brynjolfsson",
            code: "CN.B-002",
            status: "Tủ sách",
        },
        {
            id: 11,
            title: "Quy định về an toàn thông tin",
            author: "Bộ thông tin và truyền thông",
            code: "CN.B-003",
            status: "Tủ sách",
        },
        {
            id: 12,
            title: "Lý thuyết cơ sở dữ liệu và ứng dụng",
            author: "TS. Nguyễn Ngọc Cương, TS. Phạm Thị Anh Lê",
            code: "CN.B-004",
            status: "Tủ sách",
        },
        {
            id: 13,
            title: "Phần mêm mã nguồn mở",
            author: "Nhiều tác giả",
            code: "CN.B-005",
            status: "Tủ sách",
        },
        {
            id: 14,
            title: "Phần mềm mã nguồn mở",
            author: "Jong Bea Kim, Trần Thế Sơn, Đỗ Công Đức, Ninh Khánh Chi",
            code: "CN.B-005",
            status: "Tủ sách",
        },
        {
            id: 15,
            title: "Gặm tiếng anh mỗi ngày cùng Woo Bo Huyn",
            author: "Woo Bo Hyun",
            code: "CN.C-001",
            status: "Tủ sách",
        },
        {
            id: 16,
            title: "Gặm tiếng anh mỗi ngày cùng Woo Bo Huyn",
            author: "Woo Bo Hyun",
            code: "CN.C-002",
            status: "Tủ sách",
        },
        {
            id: 17,
            title: "Gặm tiếng anh mỗi ngày cùng Woo Bo Huyn",
            author: "Woo Bo Hyun",
            code: "CN.C-003",
            status: "Tủ sách",
        },
        {
            id: 18,
            title: "Bệnh nghề nghiệp và cách phòng tránh",
            author: "TS.BS. Nguyễn Việt Đồng",
            code: "CN.D-001",
            status: "Tủ sách",
        },
        {
            id: 19,
            title: "Hướng dẫn làm bộ sưu tập tem chuyên đề tham dự triển lãm",
            author: "Hội Tem Việt Nam",
            code: "CN.D-002",
            status: "Tủ sách",
        },
        {
            id: 20,
            title: "Giáo trình luật hình sự",
            author: "Bộ Tư Pháp",
            code: "CN.D-003",
            status: "Tủ sách",
        },
        {
            id: 21,
            title: "Bình đẳng và phòng, chống kỳ thị, phân biệt đối xử",
            author: "Nguyễn Thị Quế Anh - Vũ Công Giao - Mai Văn Thắng",
            code: "CN.D-004",
            status: "Tủ sách",
        },
        {
            id: 22,
            title: "Cách mạng công nghiệp 4.0 và yêu cầu đổi mới của các trường đại học",
            author: "Nguyễn Thị Xuân Lan",
            code: "CN.D-005",
            status: "Tủ sách",
        },
        {
            id: 23,
            title: "Sở tay hướng dẫn việc cung cấp thông tin cho cơ quan nhà nước",
            author: "Nhà xuát bản Tư Pháp",
            code: "CN.D-006",
            status: "Tủ sách",
        },
        {
            id: 24,
            title: "Chính sách hính sự Việt Nam trước thách thức cách mạng công nghiệp 4.0",
            author: "PGS.TS.Trịnh Tiến Việt",
            code: "CN.D-007",
            status: "Tủ sách",
        },
        {
            id: 25,
            title: "Luật xử lí vi phạm hành chính",
            author: "Bộ Tư Pháp",
            code: "CN.D-008",
            status: "Tủ sách",
        },
        {
            id: 26,
            title: "Việt Nam-Campuchia, Hợp tác hữu nghị và phát triển",
            author: "NXB Bộ Thông tin và Truyền thông",
            code: "CN.D-009",
            status: "Tủ sách",
        },
        {
            id: 27,
            title: "Các quy định về phòng chống cháy nổ",
            author: "Nguyễn Ngọc Quang",
            code: "CN.D-011",
            status: "Tủ sách",
        },
        {
            id: 28,
            title: "Luật doanh nghiệp",
            author: "Bộ Tư Pháp",
            code: "CN.D-012",
            status: "Đã mượn",
        },
        {
            id: 29,
            title: "Luật hôn nhân và gia đình và các văn bản hướng dẫn thi hành",
            author: "Bộ Tư Pháp",
            code: "CN.D-013",
            status: "Tủ sách",
        },
        {
            id: 30,
            title: "Dịch vụ công",
            author: "Vũ Công Giao - Bùi Tiến Đạt - Nguyễn Thị Minh Hà",
            code: "CN.D-014",
            status: "Đã mượn",
        },
        {
            id: 31,
            title: "Giáo trình luật dân sự Việt Nam",
            author: "Bộ Tư Pháp",
            code: "CN.D-015",
            status: "Tủ sách",
        },
        {
            id: 32,
            title: "Hỏi đáp về luật tiếp cận thông tin",
            author: "Bộ Tư Pháp",
            code: "CN.D-016",
            status: "Tủ sách",
        },
        {
            id: 33,
            title: "An ninh môi trường và hoà bình ở biển đông",
            author: "Nguyễn Chu Hồi",
            code: "CN.D-017",
            status: "Tủ sách",
        },
        {
            id: 34,
            title: "Bí mật quốc gia và sự hồi sinh",
            author: "Jonathan Allen - Amie Parnes",
            code: "GK.A-001",
            status: "Tủ sách",
        },
        {
            id: 35,
            title: "Nam Bộ với triều Nguyễn và Huế xưa",
            author: "Nguyễn Đắc Xuân",
            code: "GK.A-002",
            status: "Đã mượn",
        },
        {
            id: 36,
            title: "Bạn có đang sống cho tương lai của chính mình",
            author: "Tạ Giảo Giảo",
            code: "GK.A-003",
            status: "Đã mượn",
        },
        {
            id: 37,
            title: "Sống đơn giản cho mình thanh thản",
            author: "Shunmyo Masuno",
            code: "GK.A-004",
            status: "Tủ sách",
        },
        {
            id: 38,
            title: "Non nước Việt Nam-Sắc màu Nam Bộ",
            author: "Phạm Công Sơn",
            code: "GK.A-004",
            status: "Tủ sách",
        },
    ],
};

const DisplayTable = (positionDisplayTable) => {
    listData = database["books"];
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");

    const createDataRow = (text, type) => {
        let typeRow = document.createElement(type);
        let textContent = document.createTextNode(text);
        typeRow.appendChild(textContent);
        return typeRow;
    };
    const CreateHeaderRow = () => {
        ["id", "title", "author", "code", "status"].forEach((item) => {
            headerRow.appendChild(createDataRow(item, "th"));
        });
        table.appendChild(headerRow);
    };
    const CreateBodyRow = () => {
        listData.forEach((itemRow) => {
            let tr = document.createElement("tr");
            ["id", "title", "author", "code", "status"].forEach((item) => {
                tr.appendChild(createDataRow(itemRow[item], "td"));
            });
            table.appendChild(tr);
        });
    };
    const InputData = positionDisplayTable => {
        let container = document.querySelector(positionDisplayTable);
        container.appendChild(table);
    }
    const SearchData = () => {
        let searchElement = document.querySelector(".search-fill");
        let rows = table.children; // tr
        searchElement.addEventListener("keyup", (e) => {
            textDisplaySearch = e.target.value.toLowerCase();
            if (textDisplaySearch === "") {
                for (let i = 0; i < rows.length; i++) {
                    rows[i].style.display = "";
                }
                return;
            }
            for (let i = 1; i < rows.length; i++) {
                let cells = rows[i].children; // td
                let check = false;
                let cellText = cells[1].textContent.toLowerCase(); // tìm theo title
                textDisplaySearch.toLowerCase();
                if (cellText.indexOf(textDisplaySearch) > -1) {
                    check = true;
                }
                if (!check) {
                    rows[i].style.display = "none";
                } else {
                    rows[i].style.display = "";
                }
            }
        });
    };
    CreateHeaderRow();
    CreateBodyRow();
    InputData(positionDisplayTable);
    SearchData();
};

DisplayTable(".container");
