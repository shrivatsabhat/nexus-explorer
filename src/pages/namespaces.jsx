import axios from 'axios';
import CopyText from 'components/atoms/NE_CopyText/CopyText';
import Loader from 'components/atoms/NE_Loader';
import Table from 'components/Table/Table';
import { useNetwork } from 'hooks/useNetwork/useNetwork';
import { useQuery } from 'react-query';

export default function Namespaces() {
  const { network, getNamespaces } = useNetwork();
  const { isLoading, data, error } = useQuery(
    ['namespaces', network.name],
    getNamespaces
  );

  const columns = [
    {
      Header: '#ID',
      Cell: (props) => <div>{parseInt(props.cell.row.id) + 1}</div>,
    },

    {
      Header: 'Address',
      accessor: 'address',
      Cell: ({ value }) => <CopyText value={value} />,
    },
    {
      Header: 'Namespace',
      accessor: 'namespace',
    },
    {
      Header: 'Created',
      accessor: 'created',
      Cell: ({ value }) => new Date(value * 1000).toDateString(),
    },
  ];

  if (isLoading) {
    return (
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          minHeight: '200px',
          margin: 'auto',
        }}>
        <Loader type="circle" size="5rem" />
      </div>
    );
  }

  if (error) {
    return <div>Some Error Occured</div>;
  }

  if (data) {
    return (
      <div>
        <Table columns={columns} data={data.data.result} />
      </div>
    );
  }
}
