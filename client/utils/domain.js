
let DomainTools = {

  getDomainName:
    function getDomainName() {
      let domain = window.location.hostname;
      if (domain.lastIndexOf(".") < 0) return domain;
      if (domain == '127.0.0.1') return domain;
      return domain.substring(domain.lastIndexOf(".", domain.lastIndexOf(".") - 1) + 1);
    }

};


export default DomainTools;
