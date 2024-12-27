function TermsConditions() {
  return (
    <div
      className="space-y-4 text-lg text-gray-700 my-6 "
      style={{ marginTop: "3rem" }}
    >
      <h3 className="text-2xl border-red border-gray w-100 relative mb-4">
        Terms and Conditions
      </h3>

      <p>
        Please read the Terms and Conditions contained below before using the
        website Academic World Research. If you do not agree to these terms and
        conditions, please do not use the website or any of the information
        contained here.
      </p>
      <p>
        This agreement is made between Academic World Research and you as a site
        visitor.
      </p>
      <p>
        Academic World Research publishes news, rumors, and speculation. It may
        contain errors or inaccuracies; however, we do our best to verify all
        content. We make no warranty or guarantee as to the correctness or
        reliability of the content.
      </p>
      <p>
        This site and the data contained in it are supplied solely for
        informational use.
      </p>
      <p>
        There may be links to other websites from the Academic World Research
        website; however, these other websites are not controlled by Academic
        World Research, and we are not responsible for any content contained on
        any such website or any loss suffered by you in relation to your use of
        such websites. Under no circumstances, Academic World Research shall be
        liable for loss or damages whatsoever, whether in contract, tort, or
        otherwise from the use of, or reliance on the information contained in
        the site. Please verify the veracity of all information contained in the
        site on your own before undertaking any reliance.
      </p>
      <p>
        Your use of the website and its content is at your sole risk. The
        website and its content are provided on an "as is" and "as available"
        basis. Academic World Research expressly disclaims all warranties of any
        kind, whether express or implied, including, but not limited to, the
        implied warranties of merchantability, fitness for a particular purpose,
        title, and non-infringement. We do not guarantee the accuracy,
        completeness, or usefulness of the website and website content, and you
        rely on the website and website content at your own risk.
      </p>
      <p>
        We may occasionally update the Website and these Terms of Use and
        Privacy Policy. You should check this Website and these Terms of Use
        frequently to see recent changes. Your continued use of the Website
        after such changes will be subject to the then-current terms of use.
      </p>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="px-4 py-6 my-6 space-y-6 mx-auto max-w-6xl ">
      <h3 className="text-2xl font-semibold border-gray border-red mb-4">
        Privacy Policy
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4 text-lg">
        <a href="/" className="hover:text-red-800">
          Academicworldresearch.org
        </a>{" "}
        will respect the privacy policy of the viewers of our site. Your use of
        the site will not save any personal information about you. Academic
        World Research is free of cost and accessible to all viewers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-lg">
        We collect information from various sources and strive to provide
        accurate information. We also have the possibility to gather information
        from our own members. Our goal is to provide reliable information and
        maintain long-lasting relationships with our website visitors.
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2 text-lg">
        <li>
          As you browse our website, web servers collect information about your
          visit, not about you personally. Via web server logs, we monitor
          statistics such as:
        </li>
        <li>How many people visit our websites.</li>
        <li>Which pages people visit on our websites.</li>
        <li>
          From which domains our visitors come (e.g., "Yahoo" or "Google").
        </li>
        <li>Which browsers people use to visit our websites.</li>
        <li>
          While we gather this information, none of it is associated with you
          personally. We use these statistics to improve our website, monitor
          performance, and make it easier for visitors to use.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4 text-lg">
        Log Files: Like many other websites, Academic World Research uses log
        files. The information inside the log files includes internet protocol
        (IP) addresses, type of browser, Internet Service Provider (ISP),
        date/time stamp, referring/exit pages, and the number of clicks to
        analyze trends, administer the site, track user movement around the
        site, and gather demographic information. IP addresses and other such
        information are not linked to any personally identifiable information.
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2 text-lg">
        <li>Advertising/Cookies</li>
        <li>Academic World Research does not use cookies.</li>
        <li>Academic World Research uses Google AdSense services.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mt-4  text-lg">
        We can be reached via chat, e-mail at{" "}
        <a
          href="mailto:info@academicworldresearch.org"
          className="text-blue-600 hover:underline"
        >
          info@academicworldresearch.org
        </a>
        , and by direct phone call. If you have any questions or concerns,
        please feel free to email us at the same address.
      </p>

      <TermsConditions />
    </div>
  );
}

export default PrivacyPolicy;
