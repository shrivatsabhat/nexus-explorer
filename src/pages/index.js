import Head from 'next/head';
import Panel1 from 'components/Panel1/Panel1';
import Panel2 from 'components/Panel2/Panel2';
import Panel3 from 'components/Panel3/Panel3';
import { useQuery } from 'react-query';
import axios from 'axios';
import { refetchIntervals } from 'types/constants';

export default function Home() {
  const metricsRQ = useQuery(
    'metrics',
    () => {
      return axios.get(
        `${process.env.NEXT_PUBLIC_NEXUS_BASE_URL}/system/get/metrics`
      );
    },
    {
      refetchInterval: refetchIntervals.metrics,
    }
  );

  const infoRQ = useQuery(
    'info',
    () => {
      return axios.get(
        `${process.env.NEXT_PUBLIC_NEXUS_BASE_URL}/system/get/info`
      );
    },
    {
      refetchIntervals: refetchIntervals.info,
    }
  );

  const marketRQ = useQuery(
    'market',
    () => {
      return axios.get(
        `${process.env.NEXT_PUBLIC_COINGECKO_BASE_URL}/coins/nexus`
      );
    },
    {
      refetchIntervals: refetchIntervals.market,
    }
  );

  const miningRQ = useQuery(
    'mining',
    () => {
      return axios.get(
        `${process.env.NEXT_PUBLIC_NEXUS_BASE_URL}/ledger/get/info`
      );
    },
    {
      refetchIntervals: refetchIntervals.mining,
    }
  );

  return (
    <>
      <Head>
        <title> Nexus Explorer V2 </title>
        <meta name="description" content="Nexus Blockchain Statistics" />
      </Head>
      <main>
        <Panel1
          marketRQ={marketRQ}
          infoRQ={infoRQ}
          miningRQ={miningRQ}
          metricsRQ={metricsRQ}
        />
        <Panel2
          marketRQ={marketRQ}
          infoRQ={infoRQ}
          miningRQ={miningRQ}
          metricsRQ={metricsRQ}
        />
        <Panel3 />
      </main>
    </>
  );
}
