import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div``;

const ListContainer = styled.div`
	font-weight: bold;
	text-shadow: 4px 4px 8px black;
	float: left;
	padding-top: 200px;
	width: 1200px;
`;

const StyledLi = styled.p`
	font-size: 20px;

	:hover {
		font-size: 30px;
	}
`;

const H1 = styled.h1`
	font-size: 60px;
	padding-bottom: 10px;
`;

function JournalBanner() {
	return (
		<BannerContainer id="journalBanner">
			<ListContainer>
				<H1>Reflect to jumpstart your goals</H1>
				<StyledLi>
					Mindfulness to improve self awareness and emotional intelligence
				</StyledLi>
				<StyledLi>Boost memory, comprehension, and creativity</StyledLi>
				<StyledLi>Improve communication and self-confidence</StyledLi>
				<StyledLi>Release stress and anxiety to improve sleep</StyledLi>
			</ListContainer>
		</BannerContainer>
	);
}

export default JournalBanner;
