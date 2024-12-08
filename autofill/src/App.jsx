import React, { useState } from 'react';

function NonAutofillForm({ onSubmit }) {
  return (
    <div>
      <h2>Non-Autofill Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <label>
          Name:
          <input required type="text" name="noemail" autoComplete="new-password" />
        </label>
        <br />
        <label>
          Email:
          <input required type="email" name="noemail" autoComplete="new-password" />
        </label>
        <br />
        <label>
          Phone Number:
          <input  required type="tel" name="nophone" autoComplete="new-password" />
        </label>
        <br />
        <label>
          Address:
          <input required type="text" name="noaddress" autoComplete="new-password" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function AutofillForm({ onSubmit }) {
  return (
    <div>
      <h2>Autofill Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <label>
          Name:
          <input required type="text" name="name" autoComplete="name" />
        </label>
        <br />
        <label>
          Email:
          <input required type="email" name="email" autoComplete="email" />
        </label>
        <br />
        <label>
          Phone Number:
          <input required type="tel" name="phone" autoComplete="tel" />
        </label>
        <br />
        <label>
          Address:
          <input required type="text" name="address" autoComplete="street-address" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function ThankYouPage() {
  return (
    <div>
      <h2>Thank You!</h2>
      <p>Thank you for helping !</p>
    </div>
  );
}

function App() {
  const [step, setStep] = useState('nonAutofill'); // Initial step

  return (
    <div className="App">
      <header className="App-header">
        {step === 'nonAutofill' && (
          <NonAutofillForm onSubmit={() => setStep('autofill')} />
        )}
        {step === 'autofill' && (
          <AutofillForm onSubmit={() => setStep('thankYou')} />
        )}
        {step === 'thankYou' && <ThankYouPage />}
      </header>
    </div>
  );
}

export default App;
