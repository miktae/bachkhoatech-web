import React from 'react'

function Statistic() {
    let today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    today = dd + '/' + mm + '/' + yyyy;

    return (
        <div className="statistic">
            <h5>Thống kê</h5>
            <div className="d-flex align-items-center">
                <label htmlFor="From">
                    From
                </label>
                <input type="date" />
                <label htmlFor="From">
                    To
                </label>
                <input type="date" defaultValue={today} />
                <button className='button'>
                    Tra cứu
                </button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Ngày</th>
                        <th scope="col">Nhiệt độ (&#8451;)</th>
                        <th scope="col">Độ ẩm (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Statistic