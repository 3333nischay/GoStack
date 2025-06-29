'use client';

import React, { useState, useRef } from 'react';
import NewButton from '../buttons/newButton';

interface GetInTouchPopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  buttonText?: string; 
}

interface FormData {
  fullName: string;
  designation: string;
  companyName: string;
  contactNumber: string;
  email: string;
  requirement: string;
  cv?: File | null;
}

const formTypeMap: Record<string, { subject: string, action: string }> = {
  'Get In Touch': { 
    subject: 'Get In Touch', 
    action: 'Get In Touch' 
  },
  'Book A Discovery Call': { 
    subject: 'Discovery Call Request', 
    action: 'Discovery Call request' 
  },
  'Talk to an Expert': { 
    subject: 'Expert Consultation Request', 
    action: 'Talk to an Expert' 
  },
  'Book A Strategy Session': { 
    subject: 'Strategy Session Booking', 
    action: 'Strategy Session booking' 
  },
  'Click to Connect': { 
    subject: 'Connection Request', 
    action: 'Click to Connect' 
  },
  'Book a Strategic Consult': { 
    subject: 'Strategic Consultation Request', 
    action: 'Strategic Consult booking' 
  },
  'Start Your GCC journey': { 
    subject: 'GCC Journey Inquiry', 
    action: 'GCC Journey inquiry' 
  },
  'BOOK A CALL': { 
    subject: 'Call Booking Request', 
    action: 'Book A Call' 
  },
  'upload': { 
    subject: 'CV Upload Submission', 
    action: 'CV Upload' 
  },
  'default': { 
    subject: 'Website Form Submission', 
    action: 'form' 
  }
};

const GetInTouchPopupForm: React.FC<GetInTouchPopupFormProps> = ({ isOpen, onClose, buttonText = 'Get In Touch' }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    designation: '',
    companyName: '',
    contactNumber: '',
    email: '',
    requirement: '',
    cv: null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formType = formTypeMap[buttonText] || formTypeMap.default;
  const isUploadForm = buttonText.toLowerCase() === 'upload';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'contactNumber') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFormData(prev => ({ ...prev, cv: file }));
      setFileName(file.name);
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const pageUrl = window.location.href;
      
      const submissionData = new FormData();
      
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'cv') {
          submissionData.append(key, value as string);
        }
      });
      
      if (isUploadForm && formData.cv) {
        submissionData.append('cv', formData.cv);
      }
      submissionData.append('formType', formType.subject);
      submissionData.append('buttonSource', buttonText);
      submissionData.append('pageUrl', pageUrl);
      
      const emailContent = `
        Hey Admin,
        
        ${formData.fullName} just submitted a ${formType.action} on your website.
        
        Here are the details:
        - Full Name: ${formData.fullName}
        - Designation: ${formData.designation}
        - Company Name: ${formData.companyName}
        - Contact Number: ${formData.contactNumber}
        - Email: ${formData.email}
        - What they are looking for: ${formData.requirement}
        ${isUploadForm ? `- CV Uploaded: ${fileName || 'No file uploaded'}` : ''}
        
        This e-mail was sent from ${pageUrl}
      `;

      // Use fetch with FormData for file uploads
      const response = await fetch('/api/forms', { 
        method: 'POST',
        body: isUploadForm ? submissionData : JSON.stringify({
          to: 'nischaysinha261@gmail.com',
          subject: `${formType.subject} - ${formData.fullName}`,
          text: emailContent,
          formData: {
            ...formData,
            formType: formType.subject,
            buttonSource: buttonText,
            pageUrl
          }
        }),
        headers: isUploadForm ? undefined : {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to send submission');
      }
      
      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setFormData({
          fullName: '',
          designation: '',
          companyName: '',
          contactNumber: '',
          email: '',
          requirement: '',
          cv: null
        });
        setFileName('');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50 px-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl w-full max-w-3xl p-6 sm:p-10 font-[Satoshi] relative my-6 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-black bg-[#D3B6FB] hover:bg-[#c5a2fc] rounded-full p-2 z-10 shadow-md transition-colors duration-200"
          aria-label="Close form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-left mb-6">
          <p className="text-[#3c007a] font-medium text-base sm:text-lg leading-snug">
            {isUploadForm 
              ? 'Upload your CV and tell us a bit about yourself' 
              : (
                <>
                  Fill in a few details and we'll get in touch within <span className="font-semibold">24 hours.</span>
                </>
              )
            }
          </p>
        </div>

        {submitSuccess ? (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-6">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Your {isUploadForm ? 'application' : 'message'} has been sent. We'll be in touch soon!</span>
          </div>
        ) : (
          <form className="flex flex-col gap-4 text-sm sm:text-base" onSubmit={handleSubmit} encType={isUploadForm ? "multipart/form-data" : undefined}>
            {[
              { name: 'fullName', label: 'Full Name', placeholder: 'Enter your full name', type: 'text' },
              { name: 'designation', label: 'Designation', placeholder: 'Your job title', type: 'text' },
              { name: 'companyName', label: 'Company Name', placeholder: 'Your company name', type: 'text' },
              { name: 'contactNumber', label: 'Contact Number', placeholder: 'Your phone number (numbers only)', type: 'tel', pattern: '[0-9]*', inputMode: 'numeric' },
              { name: 'email', label: 'Email', placeholder: 'Your email address', type: 'email' },
              { name: 'requirement', label: isUploadForm ? 'Tell us about yourself' : 'What are you looking for?', placeholder: isUploadForm ? 'Brief introduction and relevant experience' : 'Describe what you need', type: 'text' },
            ].map(({ name, label, placeholder, type, pattern, inputMode }) => (
              <div key={name} className="flex flex-col">
                <label className="mb-1 font-medium text-black">{label} <span className="text-red-500">*</span></label>
                {name === 'requirement' ? (
                  <textarea
                    name={name}
                    placeholder={placeholder}
                    value={formData[name as keyof FormData] as string}
                    onChange={handleChange}
                    required
                    className="bg-[#D3B6FB] text-black px-4 py-2 rounded-md outline-none placeholder:text-gray-700 min-h-[100px]"
                  />
                ) : (
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={formData[name as keyof FormData] as string}
                    onChange={handleChange}
                    required
                    pattern={pattern}
                    inputMode={inputMode as any}
                    className="bg-[#D3B6FB] text-black px-4 py-2 rounded-md outline-none placeholder:text-gray-700"
                  />
                )}
              </div>
            ))}

            {/* CV Upload field that appears only when buttonText is 'upload' */}
            {isUploadForm && (
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-black">Upload CV <span className="text-red-500">*</span></label>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={handleFileButtonClick}
                    className="bg-[#D3B6FB] text-black px-4 py-2 rounded-md hover:bg-[#c5a2fc] transition-colors"
                  >
                    Browse Files
                  </button>
                  <div className="flex-1 bg-[#D3B6FB] text-black px-4 py-2 rounded-md overflow-hidden text-ellipsis whitespace-nowrap">
                    {fileName || 'No file selected (.pdf, .doc, .docx)'}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Max file size: 5MB. Supported formats: PDF, DOC, DOCX
                </p>
              </div>
            )}

            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {submitError}</span>
              </div>
            )}

            <div className="flex justify-center mt-4 mb-6">
              <div className="w-40">
                <NewButton 
                  text={isSubmitting ? "SENDING..." : isUploadForm ? "SUBMIT CV" : "SUBMIT"} 
                  fullWidth 
                  type="submit"
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </form>
        )}

        <div className="text-right mt-6">
          <p className="text-xl sm:text-2xl font-extrabold tracking-wide text-[#3c007a] mb-2 uppercase">
            {isUploadForm ? "Want to talk directly?" : "Know what you want?"}
          </p>
          <p className="text-[#3c007a] mb-4 sm:text-base text-sm">
            Schedule a discovery call<br />with our team
          </p>
          <div className="flex justify-end">
            <div className="w-36">
              <NewButton 
                text="BOOK A CALL" 
                fullWidth 
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    const event = new CustomEvent('openForm', { detail: { buttonText: 'BOOK A CALL' } });
                    document.dispatchEvent(event);
                  }, 100);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchPopupForm;