document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const convertBtn = document.getElementById('convert-btn');
    const clearBtn = document.getElementById('clear-btn');
    const copyBtn = document.getElementById('copy-btn');
    const downloadBtn = document.getElementById('download-btn');
    const conversionType = document.getElementById('conversion-type');
    
    // Convert button click handler
    convertBtn.addEventListener('click', function() {
        const text = inputText.value;
        if (!text.trim()) {
            alert('ଦୟାକରି କିଛି ଟେକ୍ଷଟ୍ ଟାଇପ୍ କରନ୍ତୁ!');
            return;
        }
        
        const type = conversionType.value;
        let convertedText = '';
        
        if (type === 'akruti-to-unicode') {
            convertedText = convertAkrutiToUnicode(text);
        } else {
            convertedText = convertUnicodeToAkruti(text);
        }
        
        outputText.value = convertedText;
    });
    
    // Clear button click handler
    clearBtn.addEventListener('click', function() {
        inputText.value = '';
        outputText.value = '';
    });
    
    // Copy button click handler
    copyBtn.addEventListener('click', function() {
        if (!outputText.value.trim()) {
            alert('କିଛି କପି କରିବାକୁ ନାହିଁ!');
            return;
        }
        
        outputText.select();
        document.execCommand('copy');
        alert('ଟେକ୍ଷଟ୍ କପି ହୋଇଗଲା!');
    });
    
    // Download button click handler
    downloadBtn.addEventListener('click', function() {
        if (!outputText.value.trim()) {
            alert('କିଛି ଡାଉନଲୋଡ୍ କରିବାକୁ ନାହିଁ!');
            return;
        }
        
        const blob = new Blob([outputText.value], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'converted-odia-text.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});