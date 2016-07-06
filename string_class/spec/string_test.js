describe('String class extension', function() {

  describe('vowels test', function() {
    it('should return true if string contains vowels', function() {
      expect('hello'.hasVowels()).toBe(true);
      expect('aeiou'.hasVowels()).toBe(true);
      expect('hEllo'.hasVowels()).toBe(true);
    });

    it('should return false if string does not contain vowels', function() {
      expect('qqwv'.hasVowels()).toBe(false);
      expect('KLNM'.hasVowels()).toBe(false);
      expect('X yd'.hasVowels()).toBe(false);
      expect('BS!!!'.hasVowels()).toBe(false);
    });
  });


  describe('isQuestion test', function() {
    it('should return true if the last character is a question mark', function() {
      expect('hello?'.isQuestion()).toBe(true);
      expect('A girl has no name, right?');
      expect('Where ?');
    });

    it('should return false if the last character is not a question mark', function() {
      expect('hello'.isQuestion()).toBe(false);
      expect('he?llo'.isQuestion()).toBe(false);
      expect('Hi? Jacky'.isQuestion()).toBe(false);
    });
  });


  describe('words list test', function() {
    it('should return a list of the words in the string', function() {
      expect('hi jacky'.words()).toEqual(['hi', 'jacky']);
      expect('Sasa'.words()).toEqual(['Sasa']);
      expect('1 dance'.words()).toEqual(['1', 'dance']);
      expect(typeof 'Andela'.words()).toBe('object');
    });
  });


  describe('number of words test', function() {
    it('should return the number of words in the string', function() {
      expect('hello jacky'.wordCount()).toBe(2);
      expect('Nicki'.wordCount()).toBe(1);
      expect(typeof 'Panda panda panda'.wordCount()).toBe('number');
    });
  });

});
