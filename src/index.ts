/**
 * RegExp hook to remove all white spaces from a string
 */
const RemoveWhiteSpace = (str: string): string => str.replace(/\s/g, '');

/**
 * Provides a way to test if a number is in one of the valid mobile number patterns
 */
const TestMobileNumber = (mobileNumber: string): boolean => {
  const isValidMobileNumber: boolean =
    MobileNumber.Econet.test(RemoveWhiteSpace(mobileNumber)) ||
    MobileNumber.Telecel.test(RemoveWhiteSpace(mobileNumber)) ||
    MobileNumber.Netone.test(RemoveWhiteSpace(mobileNumber));
  return isValidMobileNumber;
};

export const EmailAddress = RegExp('^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$');

const Econet = {
  regex: RegExp(/^(((\+)*2637)|07|7)7[0-9]{7}$/),
  test: (str: string): boolean => Econet.regex.test(RemoveWhiteSpace(str)),
};

const Netone = {
  regex: RegExp(/^(((\+)*2637)|07|7)1[0-9]{7}$/),
  test: (str: string): boolean => Netone.regex.test(RemoveWhiteSpace(str)),
};

const Telecel = {
  regex: RegExp(/^(((\+)*2637)|07|7)3[0-9]{7}$/),
  test: (str: string): boolean => Telecel.regex.test(RemoveWhiteSpace(str)),
};

export const MobileNumber = {
  Econet: {
    ...Econet.regex,
    test: Econet.test,
  },
  Netone: {
    ...Netone.regex,
    test: Netone.test,
  },
  Telecel: {
    ...Telecel.regex,
    test: Telecel.test,
  },
  test: TestMobileNumber,
};
export const NationalID = RegExp(/^[0-9]{2}(-|s)[0-9]{6,7}s*[A-Z]s*[0-9]{2}$/);
export const NumberPlate = RegExp(/^[A-Z]{3}(-|[[:blank:]])[0-9]{3}$/gm);
export const PassportNumber = RegExp(/^[A-Z]{2}[0-9]{6}$/);
export const DriversLicence = RegExp(/^\b\d{5}[a-zA-Z]{2}\b/);
export const SSN = RegExp(/^\b([0-9]){7}([a-zA-Z]){1}\b/);
export const DomainName = RegExp(
  /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+(\.co\.zw|\.ac\.zw|\.org\.zw)$/,
);

export const SimpleRegex = {
  /**
   * Provides regular expression for Drivers' Licences in Zimbabwe
   */
  DriversLicence,
  /**
   * Provides regular expression for email addresses
   */
  EmailAddress,
  /**
   * Regular expressions for mobile phone network operators in Zimbabwe.
   */
  MobileNumber,
  /**
   * Regular expression for National Identity Numbers in Zimbabwe
   */
  NationalID,
  /**
   * Regular expression for ordinary motor vehicle licence plate numbers in Zimbabwe.
   */
  NumberPlate,
  /**
   * Regular expression passport numbers in Zimbabwe.
   */
  PassportNumber,
  /**
   * Regular expression for social security number by National Social Security Authority of Zimbabwe.
   */
  SSN,

  /**
   * Regular expression for Zimbabwean domain name .
   */
  DomainName,
};
