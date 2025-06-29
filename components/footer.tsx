'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useFooterBackground } from "../context/FooterBackgroundContext";
import PopupText from './Forms/popupText';

export default function Footer() {
  const { backgroundColor = '#FFFFFF' } = useFooterBackground();
  const [badgeError, setBadgeError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: '',
    content: ''
  });

    const handleOpenPopup = (title: string, content: string) => {
    setPopupContent({ title, content });
    setIsPopupOpen(true);
  };

  const termsAndConditionsContent = `
    TERMS AND CONDITIONS OF USE

    Introduction

    These terms and conditions apply between you, the User of this Website (including any sub-
    domains, unless expressly excluded by their own terms and conditions), and STACKSTUDIO
    DIGITAL LTD., the owner and operator of this Website. Please read these terms and conditions
    carefully, as they affect your legal rights. Your agreement to comply with and be bound by these
    terms and conditions is deemed to occur upon your first use of the Website. If you do not agree
    to be bound by these terms and conditions, you should stop using the Website immediately.

    In these terms and conditions, User or Users means any third party that accesses the Website
    and is not either (i) employed by STACKSTUDIO DIGITAL LTD. and acting in the course of their
    employment or (ii) engaged as a consultant or otherwise providing services to STACKSTUDIO
    DIGITAL LTD. and accessing the Website in connection with the provision of such services.

    You must be at least 18 years of age to use this Website. By using the Website and agreeing to
    these terms and conditions, you represent and warrant that you are at least 18 years of age.

    Intellectual property and acceptable use

    1. All Content included on the Website, unless uploaded by Users, is the property of
       STACKSTUDIO DIGITAL LTD., our affiliates or other relevant third parties. In these terms
       and conditions, Content means any text, graphics, images, audio, video, software, data
       compilations, page layout, underlying code and software and any other form of information
       capable of being stored in a computer that appears on or forms part of this Website, including
       any such content uploaded by Users. By continuing to use the Website you acknowledge that
       such Content is protected by copyright, trademarks, database rights and other intellectual
       property rights. Nothing on this site shall be construed as granting, by implication, estoppel,
       or otherwise, any license or right to use any trademark, logo or service mark displayed on the
       site without the owner's prior written permission

    2. You may, for your own personal, non-commercial use only, do the following:
       a. retrieve, display and view the Content on a computer screen
       b. download and store the Content in electronic form on a disk (but not on any server or
          other storage device connected to a network)
       c. print one copy of the Content

    3. You must not otherwise reproduce, modify, copy, distribute or use for commercial purposes
       any Content without the written permission of STACKSTUDIO DIGITAL LTD.

    Prohibited use

    4. You may not use the Website for any of the following purposes:
       a. in any way which causes, or may cause, damage to the Website or interferes with any
          other person's use or enjoyment of the Website;
       b. in any way which is harmful, unlawful, illegal, abusive, harassing, threatening or
          otherwise objectionable or in breach of any applicable law, regulation, governmental
          order;
       c. making, transmitting or storing electronic copies of Content protected by copyright
          without the permission of the owner.

    Registration

    5. You must ensure that the details provided by you on registration or at any time are correct
       and complete.
    6. You must inform us immediately of any changes to the information that you provide when
       registering by updating your personal details to ensure we can communicate with you
       effectively.
    7. We may suspend or cancel your registration with immediate effect for any reasonable
       purposes or if you breach these terms and conditions.
    8. You may cancel your registration at any time by informing us in writing to the address at the
       end of these terms and conditions. If you do so, you must immediately stop using the Website.
       Cancellation or suspension of your registration does not affect any statutory rights.

    Links to other websites

    9. This Website may contain links to other sites. Unless expressly stated, these sites are not
       under the control of STACKSTUDIO DIGITAL LTD. or that of our affiliates.
    10. We assume no responsibility for the content of such Websites and disclaim liability for any
        and all forms of loss or damage arising out of the use of them.
    11. The inclusion of a link to another site on this Website does not imply any endorsement of the
        sites themselves or of those in control of them.

    Privacy Policy

    12. Use of the Website is also governed by our Privacy Policy, which are incorporated into these
        terms and conditions by this reference. To view the Privacy Policy, please click on the privacy
        policy link in the footer.

    Availability of the Website and disclaimers

    13. Any online facilities, tools, services or information that STACKSTUDIO DIGITAL
        LTD. makes available through the Website (the Service) is provided "as is" and on an "as
        available" basis. We give no warranty that the Service will be free of defects and/or faults. To
        the maximum extent permitted by the law, we provide no warranties (express or implied) of
        fitness for a particular purpose, accuracy of information, compatibility and satisfactory
        quality. STACKSTUDIO DIGITAL LTD. is under no obligation to update information on the
        Website.
    14. Whilst STACKSTUDIO DIGITAL LTD. uses reasonable endeavours to ensure that the
        Website is secure and free of errors, viruses and other malware, we give no warranty or
        guaranty in that regard and all Users take responsibility for their own security, that of their
        personal details and their computers.
    15. STACKSTUDIO DIGITAL LTD. accepts no liability for any disruption or non-availability of
        the Website.
    16. STACKSTUDIO DIGITAL LTD. reserves the right to alter, suspend or discontinue any part
        (or the whole of) the Website including, but not limited to, any products and/or services
        available. These terms and conditions shall continue to apply to any modified version of the
        Website unless it is expressly stated otherwise.

    Limitation of liability

    17. Nothing in these terms and conditions will: (a) limit or exclude our or your liability for death or
        personal injury resulting from our or your negligence, as applicable; (b) limit or exclude our
        or your liability for fraud or fraudulent misrepresentation; or (c) limit or exclude any of our or
        your liabilities in any way that is not permitted under applicable law.
    18. We will not be liable to you in respect of any losses arising out of events beyond our
        reasonable control.
    19. To the maximum extent permitted by law, STACKSTUDIO DIGITAL LTD. accepts no liability
        for any of the following:
        a. any business losses, such as loss of profits, income, revenue, anticipated savings,
           business, contracts, goodwill or commercial opportunities;
        b. loss or corruption of any data, database or software;
        c. any special, indirect or consequential loss or damage.

    General

    20. You may not transfer any of your rights under these terms and conditions to any other person.
        We may transfer our rights under these terms and conditions where we reasonably believe
        your rights will not be affected.
    21. These terms and conditions may be varied by us from time to time. Such revised terms will
        apply to the Website from the date of publication. Users should check the terms and
        conditions regularly to ensure familiarity with the then current version.
    22. These terms and conditions together with the Privacy Policy contain the whole agreement
        between the parties relating to its subject matter and supersede all prior discussions,
        arrangements or agreements that might have taken place in relation to the terms and
        conditions.
    23. The Contracts (Rights of Third Parties) Act 1999 shall not apply to these terms and conditions
        and no third party will have any right to enforce or rely on any provision of these terms and
        conditions.
    24. If any court or competent authority finds that any provision of these terms and conditions (or
        part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will,
        to the extent required, be deemed to be deleted, and the validity and enforceability of the
        other provisions of these terms and conditions will not be affected.
    25. Unless otherwise agreed, no delay, act or omission by a party in exercising any right or
        remedy will be deemed a waiver of that, or any other, right or remedy.
    26. This Agreement shall be governed by and interpreted according to the law of England and
        Wales and all disputes arising under the Agreement (including non-contractual disputes or
        claims) shall be subject to the exclusive jurisdiction of the English and Welsh courts.

    STACKSTUDIO DIGITAL LTD. details

    27. STACKSTUDIO DIGITAL LTD. is a company incorporated in England and Wales with
        registered number 12539069 whose registered address is 2nd Floor 30 Chuchill Place,
        London, United Kingdom, E14 5RE and it operates the Website https://intelstack.com. The
        registered VAT number is 345933970.

    You can contact STACKSTUDIO DIGITAL LTD. by email on hello@intelstack.com
`;

    const antiSlaveryContent = `
    Modern (Anti) Slavery Policy

    Modern slavery is a crime and a violation of fundamental human rights. It takes various
    forms, such as slavery, servitude, forced and compulsory labour and human trafficking,
    all of which have in common the deprivation of a person's liberty by another in order to
    exploit them for personal or commercial gain.

    The Company has a zero-tolerance approach to modern slavery, and we are committed
    to acting ethically and with integrity in all our business dealings and relationships and to
    implementing and enforcing effective systems and controls to ensure modern slavery is
    not taking place anywhere in our own business or in any of our supply chains.

    We are also committed to ensuring there is transparency in our own business and in our
    approach to tackling modern slavery throughout our supply chains, consistent with our
    disclosure obligations under the Modern Slavery Act 2015.

    We expect the same high standards from all of our contractors, suppliers and other
    business partners, and as part of our contracting processes, in the coming year we will
    include specific prohibitions against the use of forced, compulsory or trafficked labour,
    or anyone held in slavery or servitude, whether adults or children, and we expect that
    our suppliers will hold their own suppliers to the same high standards.

    This policy applies to all persons working for us or on our behalf in any capacity,
    including employees at all levels, directors, officers, agency workers, seconded
    workers, volunteers, interns, agents, contractors, external consultants, third-party
    representatives and business partners.

    This policy does not form part of any employee's contract of employment and we may
    amend it at any time.

    Responsibility for the policy

    The Company has overall responsibility for ensuring this policy complies with our legal
    and ethical obligations, and that all those under our control comply with it.

    The Company has primary and day-to-day responsibility for implementing this policy,
    monitoring its use and effectiveness, dealing with any queries about it, and auditing
    internal control systems and procedures to ensure they are effective in countering
    modern slavery.

    Management at all levels are responsible for ensuring those reporting to them
    understand and comply with this policy and are given adequate and regular training on it
    and the issue of modern slavery in supply chains.

    You are invited to comment on this policy and suggest ways in which it might be
    improved. Comments, suggestions and queries are encouraged and should be
    addressed to the Managing Director.

    Compliance with the policy

    You must ensure that you read, understand and comply with this policy.

    The prevention, detection and reporting of modern slavery in any part of our business or
    supply chains is the responsibility of all those working for us or under our control.

    You are required to avoid any activity that might lead to, or suggest, a breach of this
    policy. You must notify your line manager OR a company director as soon as possible if
    you believe or suspect that a conflict with this policy has occurred or may occur in the
    future.

    You are encouraged to raise concerns about any issue or suspicion of modern slavery in
    any parts of our business or supply chains of any supplier tier at the earliest possible
    stage. If you believe or suspect a breach of this policy has occurred or that it may occur,
    you must notify your line manager or company director or report it in accordance with
    our Whistleblowing Policy as soon as possible.

    You should note that where appropriate, and with the welfare and safety of local
    workers as a priority, we will give support and guidance to our suppliers to help them
    address coercive, abusive and exploitative work practices in their own business and
    supply chains.

    If you are unsure about whether a particular act, the treatment of workers more
    generally, or their working conditions within any tier of our supply chains constitutes any
    of the various forms of modern slavery, raise it with your line manager or company
    director.

    We aim to encourage openness and will support anyone who raises genuine concerns in
    good faith under this policy, even if they turn out to be mistaken. We are committed to
    ensuring no one suffers any detrimental treatment as a result of reporting in good faith
    their suspicion that modern slavery of whatever form is or may be taking place in any
    part of our own business or in any of our supply chains.

    Detrimental treatment includes dismissal, disciplinary action, threats or other
    unfavourable treatment connected with raising a concern.

    If you believe that you have suffered any such treatment, you should inform your line
    manager immediately. If the matter is not remedied, and you are an employee, you
    should raise it formally using our Grievance Procedure, which can be found in the
    current employee handbook.

    This Modern (Anti) Slavery Policy and Statement is intended for businesses in all
    countries, especially the United Kingdom.

    Communication & awareness of this policy

    Training on this policy, and on the risk our business faces from modern slavery in its
    supply chains, forms part of the induction process for all individuals who work for us,
    and updates will be provided using established methods of communication between
    the business and you. Our zero-tolerance approach to modern slavery must be
    communicated to all suppliers, contractors and business partners at the outset of our
    business relationship with them and reinforced as appropriate thereafter.

    Breaches of this policy

    Any employee who breaches this policy will face disciplinary action, which could result
    in dismissal for misconduct or gross misconduct. We may terminate our relationship
    with other individuals and organisations working on our behalf if they breach this policy.

    Printed and Signed Off By:
    Srinivas Annamaraju
    Director
    2025
`;
    const privacyPolicyContent = `
      PRIVACY POLICY
  
      This privacy policy applies between you, the User of this Website and STACKSTUDIO DIGITAL
      LTD., the owner and provider of this Website. STACKSTUDIO DIGITAL LTD. takes the privacy
      of your information very seriously. This privacy policy applies to our use of any and all Data
      collected by us or provided by you in relation to your use of the Website.
  
      This privacy policy should be read alongside, and in addition to, our Terms and Conditions, which
      can be found at the footer of the website.
  
      Please read this privacy policy carefully.
  
      Definitions and interpretation
  
      1. In this privacy policy, the following definitions are used:
  
      | Data | Collectively, all information that you submit to STACKSTUDIO DIGITAL LTD. via the Website. This definition incorporates, where applicable, the definitions provided in the Data Protection Laws; |
      | --- | --- |
      | Cookies | A small text file placed on your computer by this Website when you visit certain parts of the Website and/or when you use certain features of the Website. Details of the cookies used by this Website are set out in the clause below (Cookies); |
      | Data Protection Laws | Any applicable law relating to the processing of personal Data, including but not limited to the Directive 95/46/EC (Data Protection Directive) or the GDPR, and any national implementing laws, regulations and secondary legislation, as long as the GDPR is effective in the UK; |
      | GDPR | the General Data Protection Regulation (EU) 2016/679; |
      | STACKSTUDIO DIGITAL LTD., we or us | STACKSTUDIO DIGITAL LTD., a company incorporated in England and Wales with registered number 12530089 whose registered office is at 2nd Floor 30 Chiichili Place, London, United Kingdom E14 5RE |
      | UK and EU Cookie Law | The Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by the Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2011; |
      | User or you | Any third party that accesses the Website and is not either (i) employed by STACKSTUDIO DIGITAL LTD. and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to STACKSTUDIO DIGITAL LTD. and accessing the Website in connection with the provision of such services; and |
      | Website | the website that you are currently using, https://www.stack.com, and any sub-domains of this site unless expressly excluded by their own terms and conditions |
  
      2. In this privacy policy, unless the context requires a different interpretation:
         a. the singular includes the plural and vice versa;
         b. references to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or appendices of this privacy policy;
         c. a reference to a person includes firms, companies, government entities, trusts and partnerships;
         d. "including" is understood to mean "including without limitation";
         e. reference to any statutory provision includes any modification or amendment of it;
         f. the headings and sub-headings do not form part of this privacy policy.
  
      Scope of this privacy policy
  
      3. This privacy policy applies only to the actions of STACKSTUDIO DIGITAL LTD. and Users with respect to this Website. It does not extend to any websites that can be accessed from this Website including, but not limited to, any links we may provide to social media websites.
      4. For purposes of the applicable Data Protection Laws, STACKSTUDIO DIGITAL LTD. is the "data controller". This means that STACKSTUDIO DIGITAL LTD. determines the purposes for which, and the manner in which, your Data is processed.
  
      Data collected
  
      5. We may collect the following Data, which includes personal Data, from you:
         a. name;
         b. gender;
         c. job title;
         d. profession;
         e. contact information such as email addresses and telephone numbers;
         f. demographic information such as postcode, preferences and interests;
         g. operating system (automatically collected);
         h. a list of URLs starting with a referring site, your activity on this Website, and the site you exit to (automatically collected);
         i. email address
         j. contact number;
         in each case, in accordance with this privacy policy.
  
      How we collect Data
  
      6. We collect Data in the following ways:
         a. data is given to us by you;
         b. data is received from other sources; and
         c. data is collected automatically.
  
      Data that is given to us by you
  
      7. STACKSTUDIO DIGITAL LTD. will collect your Data in a number of ways, for example:
         a. when you contact us through the Website, by telephone, post, e-mail or through any other means;
         b. when you register with us and set up an account to receive our products/services;
         c. when you complete surveys that we use for research purposes (although you are not obliged to respond to them);
         d. when you enter a competition or promotion through a social media channel;
         e. when you make payments to us, through this Website or otherwise;
         f. when you elect to receive marketing communications from us;
         g. when you use our services;
         in each case, in accordance with this privacy policy.
  
      Data that is collected automatically
  
      8. To the extent that you access the Website, we will collect your Data automatically, for example:
         a. we automatically collect some information about your visit to the Website. This information helps us to make improvements to Website content and navigation, and includes your IP address, the date, times and frequency with which you access the Website and the way you use and interact with its content.
         b. we may collect your Data automatically via cookies, in line with the cookie settings on your browser. For more information about cookies, and how we use them on the Website, see the section below, headed "Cookies".
  
      Our use of Data
  
      9. Any or all of the above Data may be required by us from time to time in order to provide you with the best possible service and experience when using our Website. Specifically, Data may be used by us for the following reasons:
         a. internal record keeping;
         b. improvement of our products / services;
         c. transmission by email of marketing materials that may be of interest to you;
         d. contact for market research purposes which may be done using email, telephone, fax or mail. Such information may be used to customize or update the Website;
         in each case, in accordance with this privacy policy.
  
      10. We may use your Data for the above purposes if we deem it necessary to do so for our legitimate interests. If you are not satisfied with this, you have the right to object in certain circumstances (see the section headed "Your rights" below).
  
      11. For the delivery of direct marketing to you via e-mail, we'll need your consent, whether via an opt-in or soft-opt-in:
          a. soft opt-in consent is a specific type of consent which applies when you have previously engaged with us (for example, you contact us to ask us for more details about a particular product/service, and we are marketing similar products/services). Under "soft opt-in" consent, we will take your consent as given unless you opt-out.
          b. for other types of e-marketing, we are required to obtain your explicit consent; that is, you need to take positive and affirmative action when consenting by, for example, checking a tick box that we'll provide.
          c. if you are not satisfied about our approach to marketing, you have the right to withdraw consent at any time. To find out how to withdraw your consent, see the section headed "Your rights" below.
  
      12. When you register with us and set up an account to receive our services, the legal basis for this processing is the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract.
  
      13. We may use your Data to show you STACKSTUDIO DIGITAL LTD. adverts and other content on other websites. If you do not want us to use your data to show you STACKSTUDIO DIGITAL LTD. adverts and other content on other websites, please turn off the relevant cookies (please refer to the section headed "Cookies" below).
  
      Who we share Data with
  
      14. We may share your Data with the following groups of people for the following reasons:
          a. any of our group companies or affiliates - to ensure the proper administration of our website and business;
          b. our employees, agents and/or professional advisors - to obtain advice from professional advisers;
          c. third party service providers who provide services to us which require the processing of personal data - to help third party service providers in receipt of any shared data to perform functions on our behalf to help ensure the website runs smoothly;
          d. third party payment providers who process payments made over the website - to enable third party payment providers to process user payments and refunds;
          e. relevant authorities - to facilitate the detection of crime or collection of taxes and duties;
          in each case, in accordance with this privacy policy.
  
      Keeping Data secure
  
      15. We will use technical and organisational measures to safeguard your Data, for example:
          a. access to your account is controlled by a password and a username that is unique to you
          b. we store your Data on secure servers.
      16. Technical and organisational measures include measures to deal with any suspected data breach. If you suspect any misuse or loss or unauthorised access to your Data, please let us know immediately by contacting us via this e-mail address: hello@intelstack.com.
      17. If you want detailed information from Get Safe Online on how to protect your information and your computers and devices against fraud, identity theft, viruses and many other online problems, please visit www.getsafeonline.org. Get Safe Online is supported by HM Government and leading businesses.
  
      Data retention
  
      18. Unless a longer retention period is required or permitted by law, we will only hold your Data on our systems for the period necessary to fulfil the purposes outlined in this privacy policy or until you request that the Data be deleted.
      19. Even if we delete your Data, it may persist on backup or archival media for legal, tax or regulatory purposes.
  
      Your rights
  
      20. You have the following rights in relation to your Data:
          a. Right to access - the right to request (i) copies of the information we hold about you at any time, or (ii) that we modify, update or delete such information. If we provide you with access to the information we hold about you, we will not charge you for this, unless your request is "manifestly unfounded or excessive". Where we are legally permitted to do so, we may refuse your request. If we refuse your request, we will tell you the reasons why.
          b. Right to correct - the right to have your Data rectified if it is inaccurate or incomplete.
          c. Right to erase - the right to request that we delete or remove your Data from our systems.
          d. Right to restrict our use of your Data - the right to "block" us from using your Data or limit the way in which we can use it.
          e. Right to data portability - the right to request that we move, copy or transfer your Data.
          f. Right to object - the right to object to our use of your Data including where we use it for our legitimate interests.
      21. To make enquiries, exercise any of your rights set out above, or withdraw your consent to the processing of your Data (where consent is our legal basis for processing your Data), please contact us via this e-mail address: hello@intelstack.com.
      22. If you are not satisfied with the way a complaint you make in relation to your Data is handled by us, you may be able to refer your complaint to the relevant data protection authority. For the UK, this is the Information Commissioner's Office (ICO). The ICO's contact details can be found on their website at https://ico.org.uk/.
      23. It is important that the Data we hold about you is accurate and current. Please keep us informed if your Data changes during the period for which we hold it.
  
      Transfers outside the European Economic Area
  
      24. Data which we collect from you may be stored and processed in and transferred to countries outside of the European Economic Area (EEA). For example, this could occur if our servers are located in a country outside the EEA or one of our service providers is situated in a country outside the EEA. We also share information with our group companies, some of which are located outside the EEA.
      25. We will only transfer Data outside the EEA where it is compliant with data protection legislation and the means of transfer provides adequate safeguards in relation to your data, eg by way of data transfer agreement, incorporating the current standard contractual clauses adopted by the European Commission, or by signing up to the EU-US Privacy Shield Framework, in the event that the organisation in receipt of the Data is based in the United States of America.
      26. To ensure that your Data receives an adequate level of protection, we have put in place appropriate safeguards and procedures with the third parties we share your Data with. This ensures your Data is treated by those third parties in a way that is consistent with the Data Protection Laws.
  
      Links to other websites
  
      27. This Website may, from time to time, provide links to other websites. We have no control over such websites and are not responsible for the content of these websites. This privacy policy does not extend to your use of such websites. You are advised to read the privacy policy or statement of other websites prior to using them.
  
      Changes of business ownership and control
  
      28. STACKSTUDIO DIGITAL LTD. may, from time to time, expand or reduce our business and this may involve the sale and/or the transfer of control of all or part of STACKSTUDIO DIGITAL LTD. Data provided by Users will, where it is relevant to any part of our business so transferred, be transferred along with that part and the new owner or newly controlling party will, under the terms of this privacy policy, be permitted to use the Data for the purposes for which it was originally supplied to us.
      29. We may also disclose Data to a prospective purchaser of our business or any part of it.
      30. In the above instances, we will take steps with the aim of ensuring your privacy is protected.
  
      Cookies
  
      31. This Website may place and access certain Cookies on your computer. STACKSTUDIO DIGITAL LTD. uses Cookies to improve your experience of using the Website.
      32. All Cookies used by this Website will be in accordance with current UK and EU Cookie Law.
      33. This Website may place the following Cookies:
  
      | Type of Cookie | Purpose |
      | --- | --- |
      | Strictly necessary cookies | These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services |
      | Analytical/performance cookies | They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily |
      | Functionality cookies | These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region) |
      | Targeting cookies | These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose |
  
      34. You can choose to enable or disable Cookies in your internet browser. By default, most internet browsers accept Cookies but this can be changed. For further details, please consult the help menu in your internet browser.
      35. You can choose to delete Cookies at any time; however you may lose any information that enables you to access the Website more quickly and efficiently including, but not limited to, personalisation settings.
      36. It is recommended that you ensure that your internet browser is up-to-date and that you consult the help and guidance provided by the developer of your internet browser if you are unsure about adjusting your privacy settings.
      37. For more information generally on cookies, including how to disable them, please refer to aboutcookies.org. You will also find details on how to delete cookies from your computer.
  
      General
  
      38. You may not transfer any of your rights under this privacy policy to any other person. We may transfer our rights under this privacy policy where we reasonably believe your rights will not be affected.
      39. If any court or competent authority finds that any provision of this privacy policy (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to that extent, be deemed to be deleted, and the validity and enforceability of the other provisions of this privacy policy will not be affected.
      40. Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy.
      41. This Agreement will be governed by and interpreted according to the law of England and Wales. All disputes arising under the Agreement will be subject to the exclusive jurisdiction of the English and Welsh courts.
  
      Changes to this privacy policy
  
      42. STACKSTUDIO DIGITAL LTD. reserves the right to change this privacy policy as we may deem necessary from time to time or as may be required by law. Any changes will be immediately posted on the Website, and you are deemed to have accepted the terms of the privacy policy on your first use of the Website following the alterations. You may contact STACKSTUDIO DIGITAL LTD. by email at hello@intelstack.com
  `;

    const ismsContent = `
      ISMS Policy for Stack Technology
      
      Last updated: June 29, 2025
      
      Information Security Management System
  
      Information Security Policy
  
      To create an environment that maintains Confidentiality, Integrity, Availability and 
      Privacy of Go Stack, its customers and other stakeholder's information & assets.
      
      In line with the company policy, the information security management system is
      integrated with the organisation's processes and overall management structure and the
      Top Management is committed to implementing these in full by:
  
      • Applying the risk management process by giving confidence to
        interested parties that the risks are adequately managed.
      • Constant maintenance and evaluation for continual improvement
      • Communicating the importance of effective information security management
      • Information security is deemed to safeguard three main objectives
        • Confidentiality – data and information assets must be confined to people
          authorised to access and not be disclosed to others
        • Integrity – Keeping the data intact, complete and accurate and IT systems
          operational
        • Availability – an objective indicating that information or a system is at the
          disposal of authorised users when needed
        • Privacy – to comply with data protection requirements and privacy
          practices.
  
      Vendor management process
  
      • Information gathering
        The Purchase Team will initiate the process of selection of vendors by sending an e-mail
        to prospective vendors to gather relevant security-related information. Once the
        information is gathered, the team will determine the vendor risk criteria and select
        applicable questions from the vendor assessment questionnaire.
  
      • Risk Assessment
        The Purchase Team evaluates the terms and conditions and selects a supplier based on
        a combination of business and security requirements. The process of selection and de-listing
        of vendors is done by the Purchase Team.
  
      • Vendor Security Assessment
        After determining the risk criteria for vendors, the purchase team, in consultation with
        the CISO will perform the vendor risk assessment. Resolve or respond to any queries
        raised by the CISO on the assessment questionnaire. The Risk Assessment is done in
        order to identify gaps and to determine the risk level for a vendor. All suppliers in the list
        shall be evaluated, and any risks identified shall be mitigated by the vendor before they
        are deemed as approved vendors. If the vendor does not mitigate the risks identified
        during the initial risk assessment, then the vendor shall not be onboarded.
        
        Also, all suppliers in the vendor list are assessed once in a year. Any supplier found
        unsatisfactory shall be de-listed from the list, if the vendor does not meet the business
        and/or information security requirements of Go Stack Analytics Pvt. Ltd.
  
      • Remediation
        Based on the findings identified in the vendor security audit, remediation in terms of
        Developing Mitigation Plans within 30 to 90 days are to be created by the vendors. In
        case of failure, follow-up to be done with the vendors for Mitigation Plans.
  
      • Validation
        This is the last step in vendor management process where the findings closure
        evidences sent by the vendors are validated and in some cases on site validations
        would be done depending upon the requirements. Based on the effectiveness of the
        mitigation actions implemented the closure of the findings to be done.
  
      For questions about this policy, please contact security@stack.com
    `;

  return (
    <>
    <div className="footer-container relative">

      <div className="relative w-full h-[68px] overflow-hidden z-0">
        <div
          className="absolute inset-0"
          style={{
            borderTopLeftRadius: '68px',
            borderTopRightRadius: '68px',
            background: '#420492',
            bottom: '-1px',
            zIndex: 5,
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-full"
          style={{ backgroundColor: backgroundColor || '#000000', zIndex: 0 }}
        />
      </div>


      <footer className="bg-[#420492] text-white text-sm font-mono flex flex-col items-center pb-10 px-4 relative z-10 w-full">
        <div className="flex flex-row items-center mb-4">
          <div className="relative w-[80px] h-[80px]">
            {isClient && (
              <Image 
                src="/stack logo.png" 
                alt="Logo" 
                fill
                className="object-contain"
                onError={() => console.log("Logo image failed to load")}
              />
            )}
          </div>
          <p className="ml-3 text-lg leading-tight font-thin">
            We Build Systems<br />That Think
          </p>
        </div>

        {/* Top Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm font-bold">
          <a href="/who-we-are" className="hover:underline">About</a>
          <span>|</span>
          <a href="talent-stack" className="hover:underline">Careers</a>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-12 border-t border-white/50 pt-12 mt-10 gap-4">
          {/* Left Badge - With fallback */}
          <div className="flex-shrink-0 w-[60px] h-[60px] relative">
            {isClient && (
              <>
                {!badgeError ? (
                  <Image 
                    src="/badge.png" 
                    alt="Gold Badge" 
                    fill
                    className="object-contain"
                    onError={() => setBadgeError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-purple-800 rounded-full">
                    <span className="text-xs text-white">Badge</span>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Center Links - Added ml-0 sm:ml-8 to shift right on non-mobile */}
        <div className="flex flex-wrap justify-center items-center gap-7 text-xs text-white/80 ml-0 sm:ml-8 md:ml-20">
        <a 
          href="#" 
          className="hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            handleOpenPopup('ISMS Policy', ismsContent);
          }}
        >
          ISMS Policy
        </a>
        <a 
          href="#" 
          className="hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            handleOpenPopup('Privacy Policy', privacyPolicyContent);
          }}
        >
          Privacy Policy
        </a>
        <a 
          href="#" 
          className="hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            handleOpenPopup('Anti Slavery Policy', antiSlaveryContent);
          }}
        >
          Anti Slavery Policy
        </a>
        <a 
          href="#" 
          className="hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            handleOpenPopup('Terms & Conditions', termsAndConditionsContent);
          }}
        >
          Terms & Conditions
        </a>
      </div>

          {/* Right Social Icons - With fallback */}
          <div className="flex items-center gap-4">
            {/* Social media icons with error handling */}
            {isClient && (
              <>
                <SocialIcon src="/twitter.png" alt="X" />
                <SocialIcon src="/linkedin.png" alt="LinkedIn" />
                <SocialIcon src="/instagram.png" alt="Instagram" />
                <SocialIcon src="/youtube.png" alt="YouTube" />
              </>
            )}
          </div>
        </div>
      </footer>
    </div>
    <PopupText
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={popupContent.title}
        content={popupContent.content}
      />
    </>
  );
}

const SocialIcon = ({ src, alt }: { src: string; alt: string }) => {
  const [error, setError] = useState(false);
  
  const handleClick = () => {
    let url = '';
    switch(alt) {
      case 'X':
        url = 'https://twitter.com/stacktechnology';
        break;
      case 'LinkedIn':
        url = 'https://www.linkedin.com/company/go-stack/';
        break;
      case 'Instagram':
        url = 'https://www.instagram.com/stacktechnology';
        break;
      case 'YouTube':
        url = 'https://www.youtube.com/channel/stacktechnology';
        break;
      default:
        url = '#';
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div 
      className="relative w-6 h-6 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Visit our ${alt} page`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {!error ? (
        <Image
          src={src}
          alt={alt}
          width={20}
          height={20}
          className="object-contain"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-[8px]">{alt[0]}</span>
        </div>
      )}
    </div>
  );
};