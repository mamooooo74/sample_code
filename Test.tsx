'use client'


const Test = () => {

  return (
    <div>
      <button onClick={async() => {
        const responseData = await fetch("/api")
        const jsonData = await responseData.json()
        const blob = new Blob([new Uint8Array(jsonData.data)])
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'test2.zip');
      document.body.appendChild(link);
      link.click();

      URL.revokeObjectURL(url);
      }}>test</button>
    </div>
  )
}

export default Test