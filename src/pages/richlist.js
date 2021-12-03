// import Table from 'components/atoms/Table';
import { Table, Tag, Space } from 'antd';
import data from 'assets/data/richlist.json';

function richlist() {
  const columns = [
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
    },
  ];
  const newData = data.map((item, index) => ({
    key: index,
    address: item[0],
    balance: `${parseInt(item[1]).toFixed(2)} NXS`,
  }));

  return (
    <div style={{ overflow: 'scroll' }}>
      {/* <pre className="themeText">{JSON.stringify(data.result, null, 2)}</pre> */}
      <Table columns={columns} dataSource={newData} />
    </div>
  );
}

export default richlist;
