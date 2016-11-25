describe('FizzBuzzChallenge_UI - index.html', function() {
    describe('Play Fizz Buzz', function() {
        beforeEach(function() {
            jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
            loadFixtures('sample_partial.html');
            $.holdReady(false);
            $('#insert_number').val(3);
            $('#check_number').trigger('click');
        });

        it('display outcome', function() {
          debugger;
            expect($('#display_outcome').text()).toBe('fizz');
        });
    });
});
