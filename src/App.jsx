import React, { useState } from 'react';

const TextAnalyzer = () => {
  const [activeTab, setActiveTab] = useState('wordInput');
  const [inputText, setInputText] = useState('');
  const [metrics, setMetrics] = useState({
    characters: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    spaces: 0,
    punctuations: 0,
  });

  const calculateMetrics = (text) => {
    const characterCount = text.length;
    const wordCount = text.split(/\s+/).filter((word) => word !== '').length;
    const sentenceCount = text.split(/[.!?]+/).filter((sentence) => sentence !== '').length;
    const paragraphCount = text.split('\n\n').filter((paragraph) => paragraph !== '').length;
    const spaceCount = text.split(' ').length - 1;
    const punctuationCount = text.replace(/[^\.,!?]/g, '').length;

    setMetrics({
      characters: characterCount,
      words: wordCount,
      sentences: sentenceCount,
      paragraphs: paragraphCount,
      spaces: spaceCount,
      punctuations: punctuationCount,
    });
  };

  const handleTextChange = (event) => {
    const newText = event.target.value.slice(0, 500); // Limit input to 500 characters
    setInputText(newText);
    calculateMetrics(newText);
  };

  const processWords = () => {
    // Process words logic here if needed
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setInputText(''); // Clear input when switching tabs
  };

  return (
    <div>
      <div>
        <h1>Text Analyzer</h1>
        <p>
          Text Analyzer is a simple free online tool SEO web content analysis that helps you find the
          most frequent phrases and words, the number of characters, words, sentences, and paragraphs,
          and the estimated read and speak time of your content.
        </p>
        <button onClick={() => switchTab('wordInput')} style={activeTab === 'wordInput' ? activeTabStyle : tabStyle}>
          Word Input
        </button>
        <button onClick={() => switchTab('paragraphInput')} style={activeTab === 'paragraphInput' ? activeTabStyle : tabStyle}>
          Paragraph Input
        </button>
      </div>

      {activeTab === 'wordInput' && (
        <div>
          <p> </p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <textarea
              value={inputText}
              onChange={handleTextChange}
              placeholder="Type or paste your words here..."
              style={{ ...textareaStyle, height: '30px', width: '88%', marginRight: '10px' }} // Smaller textarea
            />
            <button onClick={processWords} style={{ backgroundColor: 'violet', color: 'white', padding: '1px', height: '50px' }}>
              Process Word
            </button>
          </div>

          <div style={{ marginTop: '10px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <td style={tableHeaderStyle}>Characters</td>
                  <td style={tableHeaderStyle}>Words</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>{metrics.characters}</td>
                  <td style={tableCellStyle}>{metrics.words}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={additionalTableHeaderStyle}>Definition:</td>
                  <td style={additionalTableCellStyle}>in, relating to,or characteristic of a town or city."the urban population"</td>
                </tr>
                <tr>
                  <td style={additionalTableHeaderStyle}>Parts of Speech:</td>
                  <td style={additionalTableCellStyle}>Noun</td>
                </tr>
                <tr>
                  <td style={additionalTableHeaderStyle}>Synonyms:</td>
                  <td style={additionalTableCellStyle}>Town</td>
                </tr>
                <tr>
                  <td style={additionalTableHeaderStyle}>Antonyms:</td>
                  <td style={additionalTableCellStyle}>Rural</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'paragraphInput' && (
        <div>
          <p>  </p>
          <textarea
            value={inputText}
            onChange={handleTextChange}
            placeholder="Type or copy/paste your content here."
            style={{ ...textareaStyle, height: '200px' }} 
          />

          <div style={{ marginTop: '10px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <td style={tableHeaderStyle}>Characters</td>
                  <td style={tableHeaderStyle}>Words</td>
                  <td style={tableHeaderStyle}>Sentences</td>
                  <td style={tableHeaderStyle}>Paragraphs</td>
                  <td style={tableHeaderStyle}>Spaces</td>
                  <td style={tableHeaderStyle}>Punctuations</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>{metrics.characters}</td>
                  <td style={tableCellStyle}>{metrics.words}</td>
                  <td style={tableCellStyle}>{metrics.sentences}</td>
                  <td style={tableCellStyle}>{metrics.paragraphs}</td>
                  <td style={tableCellStyle}>{metrics.spaces}</td>
                  <td style={tableCellStyle}>{metrics.punctuations}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

const tabStyle = {
  padding: '10px',
  marginRight: '10px',
  cursor: 'pointer',
};

const activeTabStyle = {
  ...tabStyle,
  borderBottom: '2px solid black',
};

const textareaStyle = {
  width: '100%',
  resize: 'none',
  padding: '8px',
  marginBottom: '10px',
};

const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
  backgroundColor: '#f2f2f2',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
};

const additionalTableHeaderStyle = {

  padding: '8px',
  textAlign: 'left',
  backgroundColor: '#f2f2f2',
  width: '30%',
};

const additionalTableCellStyle = {
  padding: '8px',
  textAlign: 'left',
  backgroundColor: '#f2f2f2',
  width: '70%',
};

export default TextAnalyzer;
