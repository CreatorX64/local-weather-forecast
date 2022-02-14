export const fadeInUpParent = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren"
    }
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

export const fadeInUpChild = {
  hidden: {
    opacity: 0,
    y: 5
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

export const fadeInUpChild80 = {
  hidden: {
    opacity: 0,
    y: 85
  },
  visible: {
    opacity: 1,
    y: 80
  }
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1
    }
  }
};
