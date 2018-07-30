describe('Bubble Sort', function(){
  beforeAll(function(){
    spyOn(bubble, 'sort').and.callThrough();
  })

  it('handles an empty array', function(){
    expect( bubble.bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single-element array', function(){
    expect( bubble.bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles a two-element sorted array', function(){
    expect( bubble.bubbleSort([1, 2]) ).toEqual( [1, 2] );
  });

  it('handles a two-element unsorted array', function(){
    expect( bubble.bubbleSort([2, 1]) ).toEqual( [1, 2] );
  });

  it('handles a multiple-element array', function(){
    expect( bubble.bubbleSort([3, 2, 1]) ).toEqual( [1, 2, 3] );

    expect( bubble.bubbleSort([4, 7, 3, 6, 5, 1, 2]) ).toEqual( [1, 2, 3, 4, 5, 6, 7] );
  });

  it('handles repeating numbers in an array', function(){
    expect( bubble.bubbleSort([1, 2, 1, 1]) ).toEqual( [1, 1, 1, 2] );
  });
});
