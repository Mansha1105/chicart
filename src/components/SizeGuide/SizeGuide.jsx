import React from 'react'
import './SizeGuide.css'
import mesuringguide from '../../assets/mesuring-guide.jpg'
const SizeGuide = () => {
  return (
    <div className='SizeGuide-container' id='SizeGuide'>
        <p className='subtitle'>
            To help you find the perfect ChiCart fit, please refer to our size guide below.
        </p>


        <table className='size-table'>
            <thead>
                <tr>
                    <th>SIZE</th>
                    <th>BUST</th>
                    <th>WAIST</th>
                    <th>HIPS</th>
                </tr>
            </thead>

        <tbody>
          <tr><td>XXS</td><td>76–79</td><td>58–61</td><td>84–86</td></tr>
          <tr><td>XS</td><td>80–81.5</td><td>62–65</td><td>87–90</td></tr>
          <tr><td>S</td><td>81.5–85</td><td>66–69</td><td>91.5–95</td></tr>
          <tr><td>M</td><td>86.5–91.5</td><td>71–74</td><td>96.5–101.5</td></tr>
          <tr><td>L</td><td>93–96.5</td><td>76–81</td><td>101.5–106.5</td></tr>
          <tr><td>XL</td><td>99–104</td><td>82.5–87.5</td><td>108–113</td></tr>
          <tr><td>XXL</td><td>106.5–112</td><td>88–93</td><td>114.5–119.5</td></tr>
        </tbody>
        </table>

        <p className="note">
        Measurements are in centimeters. For the best fit, measure your body rather than your clothes.
        </p>



    </div>
  )
}

export default SizeGuide