import { Deepgram } from '@deepgram/sdk';

// The API key we created in step 3
const deepgramApiKey = NEXT_PUBLIC_API_KEY;

// Hosted sample file
const audioUrl = "https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav";

// Initializes the Deepgram SDK
const deepgram = new Deepgram(deepgramApiKey);

console.log('Requesting transcript...')
console.log('Your file may take up to a couple minutes to process.')
console.log('While you wait, did you know that Deepgram accepts over 40 audio file formats? Even MP4s.')
console.log('To learn more about customizing your transcripts check out developers.deepgram.com.')

deepgram.transcription.preRecorded(
  { url: audioUrl },
  {punctuate: true, model: 'nova', language: 'en-US' },
)
.then((transcription) => {
  console.dir(transcription, {depth: null});
})
.catch((err) => {
  console.log(err);
});