import { useRef, useState } from 'react';
import useFetch from '../../hooks/useFetch';

interface IShortResponse {
  ok: boolean;
  result: {
    full_share_link: string;
    original_link: string;
  };
}

interface IShortenUrlList {
  originalUrl: string;
  shortUrl: string;
}

export default function Home() {
  const [shortenUrlList, setShortenUrlList] = useState<IShortenUrlList[]>([]);

  const inputRef = useRef<HTMLInputElement>();

  const shrtcoUrl = 'https://api.shrtco.de/v2';
  const { get, post, loading } = useFetch(shrtcoUrl);

  function handleButtonClick(e) {
    e.preventDefault();
    const value = inputRef.current.value;

    get('/shorten?url=' + value).then((data: IShortResponse) => {
      if (data?.ok) {
        const { result } = data;
        const shortUrl = result?.full_share_link;
        const originalUrl = result?.original_link;

        setShortenUrlList([...shortenUrlList, { shortUrl, originalUrl }]);
      }
    });
  }

  function handleCopyClick(id) {
    const shortUrl = shortenUrlList[id].shortUrl;
    navigator.clipboard.writeText(shortUrl);
  }

  return (
    <>
      <h2>Home</h2>

      <form>
        <label htmlFor="">
          Input link
          <input placeholder="Shorten a link here" ref={inputRef} />
        </label>

        <button onClick={handleButtonClick}>Shorten !!</button>
      </form>

      {shortenUrlList && (
        <ul>
          {shortenUrlList.map((shortenUrl, index) => {
            const { originalUrl, shortUrl } = shortenUrl;
            return (
              <li key={index}>
                {originalUrl} {shortUrl}
                <button onClick={() => handleCopyClick(index)}>Copy</button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
