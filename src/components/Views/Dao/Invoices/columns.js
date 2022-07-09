import { FiInfo } from 'react-icons/fi';
import { intlNum, timestampToDate } from 'utils';

function handleMoreInfo(rowInfo) {
  console.log(rowInfo);
  alert(JSON.stringify(rowInfo, null, 2));
}

export const columns = [
  {
    Header: '',
    accessor: 'address',
    Cell: (props) => (
      <div onClick={() => handleMoreInfo(props.row.original)}>
        <FiInfo />
      </div>
    ),
  },
  {
    Header: 'Time',
    accessor: 'modified',
    Cell: (props) => timestampToDate(props.value),
  },
  {
    Header: 'Status',
    accessor: 'json.status',
    Cell: (props) => <div>{props.value}</div>,
  },
  {
    Header: 'Amount',
    accessor: 'json.amount',
    Cell: (props) => (
      <div>
        {intlNum(props.value)}{' '}
        {props.row.values.ticker == '0' ? 'NXS' : props.row.values.ticker}
      </div>
    ),
  },
  {
    Header: 'Reference',
    accessor: 'json.reference',
    Cell: (props) => <div>{props.value}</div>,
  },
  {
    Header: 'Sender Detail',
    accessor: 'json.sender_detail',
  },

  // {
  //   Header: 'Account Payable',
  //   accessor: 'json.account',
  //   Cell: (props) => (
  //     <NE_CopyText value={props.value} link={`/scan/${props.value}`} />
  //   ),
  // },
  // {
  //   Header: 'Recipient',
  //   accessor: 'json.recipient',
  //   Cell: (props) => (
  //     <NE_CopyText value={props.value} link={`/scan/${props.value}`} />
  //   ),
  // },
];
